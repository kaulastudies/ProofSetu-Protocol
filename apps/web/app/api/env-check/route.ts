import { NextResponse } from "next/server";

function maskValue(value: string | undefined) {
if (!value) {
return null;
}

if (value.length <= 10) {
return "configured";
}

return `${value.slice(0, 4)}...${value.slice(-4)}`;
}

export async function GET() {
const network = process.env.STELLAR_NETWORK;
const contractId = process.env.STELLAR_CONTRACT_ID;
const publicKey = process.env.STELLAR_API_CALLER_PUBLIC_KEY;
const secretKey = process.env.STELLAR_API_CALLER_SECRET_KEY;

return NextResponse.json({
status: "ready",
message:
"Environment variable check completed. Secret key is not exposed.",
stellar: {
network: network || null,
contractId: contractId || null,
apiCallerPublicKey: publicKey || null,
apiCallerSecretKeyConfigured: Boolean(secretKey),
apiCallerSecretKeyPreview: maskValue(secretKey),
},
safety: {
secretKeyExposed: false,
note: "Never expose the full secret key in API responses, GitHub, screenshots, docs, or chat.",
},
});
}
