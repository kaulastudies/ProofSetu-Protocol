import { NextResponse } from "next/server";

function cleanValue(value: string | undefined) {
return value?.trim() || null;
}

export async function GET() {
const network = cleanValue(process.env.STELLAR_NETWORK);
const contractId = cleanValue(process.env.STELLAR_CONTRACT_ID);
const publicKey = cleanValue(process.env.STELLAR_API_CALLER_PUBLIC_KEY);
const secretKey = cleanValue(process.env.STELLAR_API_CALLER_SECRET_KEY);

return NextResponse.json({
status: "ready",
message:
"Environment variable check completed. Secret key is configured but not exposed.",
stellar: {
network,
contractId,
apiCallerPublicKey: publicKey,
apiCallerSecretKeyConfigured: Boolean(secretKey),
},
safety: {
secretKeyExposed: false,
note: "The full secret key and even masked secret previews must not be exposed in API responses, GitHub, screenshots, docs, or chat.",
},
});
}
