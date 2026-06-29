type StellarServerConfig = {
network: string;
contractId: string;
apiCallerPublicKey: string;
apiCallerSecretKey: string;
};

function readRequiredEnv(name: string) {
const value = process.env[name]?.trim();

if (!value) {
throw new Error(`Missing required environment variable: ${name}`);
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
