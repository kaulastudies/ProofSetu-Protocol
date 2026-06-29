import { NextRequest, NextResponse } from "next/server";
import {
getSafeStellarServerStatus,
submitCreateProofToStellarTestnet,
} from "../../../lib/stellar-server";

export const runtime = "nodejs";
export const maxDuration = 30;

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
mode: "stellar_testnet_ready",
message:
"API route is ready for backend-assisted Stellar testnet invocation. Secret key is configured server-side and is not exposed.",
stellar: getSafeStellarServerStatus(),
});
}

export async function POST(request: NextRequest) {
try {
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
      mode: "stellar_testnet_invocation",
      message: "Missing required proof fields.",
      missingFields,
      secretKeyExposed: false,
      stellar: getSafeStellarServerStatus(),
    },
    { status: 400 }
  );
}

const result = await submitCreateProofToStellarTestnet({
  proof_id: payload.proof_id as string,
  proof_type: payload.proof_type as string,
  event_hash: payload.event_hash as string,
  creator: payload.creator as string,
  reference_id: payload.reference_id as string,
  timestamp: payload.timestamp as string,
});

return NextResponse.json({
  ...result,
  message:
    "Proof was successfully submitted to the deployed Stellar testnet contract.",
  secretKeyExposed: false,
});


} catch (error) {
const message =
error instanceof Error
? error.message
: "Stellar testnet invocation failed.";


return NextResponse.json(
  {
    success: false,
    mode: "stellar_testnet_invocation",
    message,
    secretKeyExposed: false,
    stellar: getSafeStellarServerStatus(),
  },
  { status: 500 }
);


}
}
