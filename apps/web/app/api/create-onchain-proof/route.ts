import { NextRequest, NextResponse } from "next/server";
import {
getSafeStellarServerStatus,
getStellarServerConfig,
} from "../../../lib/stellar-server";

type CreateOnchainProofPayload = {
proof_id?: string;
proof_type?: string;
event_hash?: string;
creator?: string;
reference_id?: string;
timestamp?: string;
};

export async function GET() {
return NextResponse.json({
status: "ready",
route: "/api/create-onchain-proof",
mode: "scaffold_with_env_check",
message:
"API route scaffold is ready. Server-side Stellar environment configuration is available without exposing the secret key.",
stellar: getSafeStellarServerStatus(),
});
}

export async function POST(request: NextRequest) {
try {
const stellarConfig = getStellarServerConfig();
const payload = (await request.json()) as CreateOnchainProofPayload;


const requiredFields = [
  "proof_id",
  "proof_type",
  "event_hash",
  "creator",
  "reference_id",
  "timestamp",
] as const;

const missingFields = requiredFields.filter((field) => !payload[field]);

if (missingFields.length > 0) {
  return NextResponse.json(
    {
      success: false,
      mode: "scaffold_with_env_check",
      message: "Missing required proof fields.",
      missingFields,
      stellar: getSafeStellarServerStatus(),
    },
    { status: 400 }
  );
}

return NextResponse.json({
  success: true,
  mode: "scaffold_with_env_check",
  message:
    "Proof payload received successfully. Server-side Stellar config is available. Real testnet invocation will be added in the next milestone.",
  contractId: stellarConfig.contractId,
  network: stellarConfig.network,
  apiCallerPublicKey: stellarConfig.apiCallerPublicKey,
  secretKeyExposed: false,
  proof: {
    proof_id: payload.proof_id,
    proof_type: payload.proof_type,
    event_hash: payload.event_hash,
    creator: payload.creator,
    reference_id: payload.reference_id,
    timestamp: payload.timestamp,
  },
  nextStep:
    "Use the server-side Stellar SDK flow to submit create_proof to the deployed Soroban testnet contract.",
});


} catch (error) {
const message =
error instanceof Error ? error.message : "Invalid request or server config.";


return NextResponse.json(
  {
    success: false,
    mode: "scaffold_with_env_check",
    message,
    secretKeyExposed: false,
  },
  { status: 400 }
);


}
}
