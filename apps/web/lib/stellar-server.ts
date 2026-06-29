import {
BASE_FEE,
Contract,
Keypair,
Networks,
TransactionBuilder,
nativeToScVal,
scValToNative,
} from "@stellar/stellar-sdk";
import { Api, Server } from "@stellar/stellar-sdk/rpc";

const STELLAR_TESTNET_RPC_URL = "https://soroban-testnet.stellar.org/";

type StellarServerConfig = {
network: string;
contractId: string;
apiCallerPublicKey: string;
apiCallerSecretKey: string;
};

type CreateProofInvocationInput = {
proof_id: string;
proof_type: string;
event_hash: string;
creator: string;
reference_id: string;
timestamp: string;
};

type VerifyProofInvocationInput = {
proof_id: string;
event_hash: string;
};

function readRequiredEnv(name: string) {
const value = process.env[name]?.trim();

if (!value) {
throw new Error("Missing required environment variable: " + name);
}

return value;
}

export function getStellarServerConfig(): StellarServerConfig {
return {
network: readRequiredEnv("STELLAR_NETWORK"),
contractId: readRequiredEnv("STELLAR_CONTRACT_ID"),
apiCallerPublicKey: readRequiredEnv("STELLAR_API_CALLER_PUBLIC_KEY"),
apiCallerSecretKey: readRequiredEnv("STELLAR_API_CALLER_SECRET_KEY"),
};
}

export function getSafeStellarServerStatus() {
const network = process.env.STELLAR_NETWORK?.trim() || null;
const contractId = process.env.STELLAR_CONTRACT_ID?.trim() || null;
const apiCallerPublicKey =
process.env.STELLAR_API_CALLER_PUBLIC_KEY?.trim() || null;
const apiCallerSecretKey =
process.env.STELLAR_API_CALLER_SECRET_KEY?.trim() || null;

return {
network,
contractId,
apiCallerPublicKey,
apiCallerSecretKeyConfigured: Boolean(apiCallerSecretKey),
secretKeyExposed: false,
};
}

function getVerifiedSourceKeypair(config: StellarServerConfig) {
if (config.network !== "testnet") {
throw new Error("Only Stellar testnet invocation is enabled.");
}

const sourceKeypair = Keypair.fromSecret(config.apiCallerSecretKey);

if (sourceKeypair.publicKey() !== config.apiCallerPublicKey) {
throw new Error(
"API caller public key does not match the configured secret key."
);
}

return sourceKeypair;
}

export async function submitCreateProofToStellarTestnet(
proof: CreateProofInvocationInput
) {
const config = getStellarServerConfig();
const sourceKeypair = getVerifiedSourceKeypair(config);

const server = new Server(STELLAR_TESTNET_RPC_URL);
const contract = new Contract(config.contractId);
const sourceAccount = await server.getAccount(sourceKeypair.publicKey());

const builtTransaction = new TransactionBuilder(sourceAccount, {
fee: BASE_FEE,
networkPassphrase: Networks.TESTNET,
})
.addOperation(
contract.call(
"create_proof",
nativeToScVal(proof.proof_id, { type: "string" }),
nativeToScVal(proof.proof_type, { type: "string" }),
nativeToScVal(proof.event_hash, { type: "string" }),
nativeToScVal(proof.creator, { type: "string" }),
nativeToScVal(proof.reference_id, { type: "string" }),
nativeToScVal(proof.timestamp, { type: "string" })
)
)
.setTimeout(30)
.build();

const preparedTransaction = await server.prepareTransaction(builtTransaction);

preparedTransaction.sign(sourceKeypair);

const sendResponse = await server.sendTransaction(preparedTransaction);

if (sendResponse.status !== "PENDING") {
throw new Error(
"Stellar transaction was not accepted as pending. Status: " +
sendResponse.status
);
}

const finalResponse = await server.pollTransaction(sendResponse.hash, {
attempts: 10,
sleepStrategy: function () {
return 1000;
},
});

if (finalResponse.status !== Api.GetTransactionStatus.SUCCESS) {
throw new Error(
"Stellar transaction did not succeed. Status: " + finalResponse.status
);
}

return {
success: true,
mode: "stellar_testnet_invocation",
message: "Proof was submitted to the deployed Stellar testnet contract.",
network: config.network,
contractId: config.contractId,
apiCallerPublicKey: config.apiCallerPublicKey,
transactionHash: sendResponse.hash,
stellarStatus: finalResponse.status,
secretKeyExposed: false,
proof,
};
}

export async function verifyProofOnStellarTestnet(
proof: VerifyProofInvocationInput
) {
const config = getStellarServerConfig();
const sourceKeypair = getVerifiedSourceKeypair(config);

const server = new Server(STELLAR_TESTNET_RPC_URL);
const contract = new Contract(config.contractId);
const sourceAccount = await server.getAccount(sourceKeypair.publicKey());

const builtTransaction = new TransactionBuilder(sourceAccount, {
fee: BASE_FEE,
networkPassphrase: Networks.TESTNET,
})
.addOperation(
contract.call(
"verify_proof",
nativeToScVal(proof.proof_id, { type: "string" }),
nativeToScVal(proof.event_hash, { type: "string" })
)
)
.setTimeout(30)
.build();

const simulation = await server.simulateTransaction(builtTransaction);

if ("error" in simulation) {
throw new Error(
"Stellar verification simulation failed: " + simulation.error
);
}

const retval = (
simulation as {
result?: {
retval?: Parameters<typeof scValToNative>[0];
};
}
).result?.retval;

if (!retval) {
throw new Error("Stellar verification simulation returned no result.");
}

const verified = Boolean(scValToNative(retval));

return {
success: true,
mode: "stellar_testnet_verification",
message: verified
? "Proof hash verified against the deployed Stellar testnet contract."
: "Proof hash did not match the stored Stellar testnet proof record.",
network: config.network,
contractId: config.contractId,
apiCallerPublicKey: config.apiCallerPublicKey,
proofId: proof.proof_id,
eventHash: proof.event_hash,
verified,
secretKeyExposed: false,
};
}
