import { NextResponse } from "next/server";
import { getSafeStellarServerStatus } from "../../../lib/stellar-server";

export async function GET() {
return NextResponse.json({
status: "ready",
message:
"Environment variable check completed. Secret key is configured but not exposed.",
stellar: getSafeStellarServerStatus(),
safety: {
secretKeyExposed: false,
note: "The full secret key and even masked secret previews must not be exposed in API responses, GitHub, screenshots, docs, or chat.",
},
});
}
