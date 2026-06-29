import { NextRequest, NextResponse } from "next/server";
import { STELLAR_TESTNET_CONFIG } from "../../../lib/stellar-testnet";

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
mode: "scaffold_only",
message:
"API route scaffold is ready. Backend-assisted Stellar testnet invocation will be added in the next milestone.",
network: STELLAR_TESTNET_CONFIG.network,
contractId: STELLAR_TESTNET_CONFIG.contractId,
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
      mode: "scaffold_only",
      message: "Missing required proof fields.",
      missingFields,
    },
    { status: 400 }
  );
}

return NextResponse.json({
  success: true,
  mode: "scaffold_only",
  message:
    "Proof payload received successfully. Backend-assisted Stellar testnet invocation is coming next.",
  contractId: STELLAR_TESTNET_CONFIG.contractId,
  network: STELLAR_TESTNET_CONFIG.network,
  proof: {
    proof_id: payload.proof_id,
    proof_type: payload.proof_type,
    event_hash: payload.event_hash,
    creator: payload.creator,
    reference_id: payload.reference_id,
    timestamp: payload.timestamp,
  },
  nextStep:
    "Connect this API route to Stellar testnet contract invocation using secure server-side environment variables.",
});


} catch {
return NextResponse.json(
{
success: false,
mode: "scaffold_only",
message: "Invalid JSON payload.",
},
{ status: 400 }
);
}
}
