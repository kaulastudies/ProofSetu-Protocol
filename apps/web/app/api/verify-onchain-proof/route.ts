import { NextRequest, NextResponse } from "next/server";
import {
getSafeStellarServerStatus,
verifyProofOnStellarTestnet,
} from "../../../lib/stellar-server";

export const runtime = "nodejs";
export const maxDuration = 30;

type VerifyOnchainProofPayload = {
proof_id?: string;
event_hash?: string;
};

export async function GET() {
return NextResponse.json({
status: "ready",
route: "/api/verify-onchain-proof",
mode: "stellar_testnet_verification_ready",
message:
"API route is ready to verify proof ID and event hash against the deployed Stellar testnet contract.",
stellar: getSafeStellarServerStatus(),
});
}

export async function POST(request: NextRequest) {
try {
const payload = (await request.json()) as VerifyOnchainProofPayload;


const requiredFields = ["proof_id", "event_hash"] as const;
const missingFields = requiredFields.filter((field) => !payload[field]);

if (missingFields.length > 0) {
  return NextResponse.json(
    {
      success: false,
      mode: "stellar_testnet_verification",
      message: "Missing required verification fields.",
      missingFields,
      secretKeyExposed: false,
      stellar: getSafeStellarServerStatus(),
    },
    { status: 400 }
  );
}

const result = await verifyProofOnStellarTestnet({
  proof_id: payload.proof_id as string,
  event_hash: payload.event_hash as string,
});

return NextResponse.json(result);


} catch (error) {
const message =
error instanceof Error
? error.message
: "Stellar testnet verification failed.";


return NextResponse.json(
  {
    success: false,
    mode: "stellar_testnet_verification",
    message,
    secretKeyExposed: false,
    stellar: getSafeStellarServerStatus(),
  },
  { status: 500 }
);


}
}
