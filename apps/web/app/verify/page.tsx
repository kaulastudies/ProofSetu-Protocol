"use client";

import { useState } from "react";
import { STELLAR_TESTNET_CONFIG } from "../../lib/stellar-testnet";

type VerificationResponse = {
success?: boolean;
mode?: string;
message?: string;
network?: string;
contractId?: string;
apiCallerPublicKey?: string;
proofId?: string;
eventHash?: string;
verified?: boolean;
secretKeyExposed?: boolean;
missingFields?: string[];
};

export default function VerifyOnchainProofPage() {
const [proofId, setProofId] = useState("");
const [eventHash, setEventHash] = useState("");
const [loading, setLoading] = useState(false);
const [result, setResult] = useState<VerificationResponse | null>(null);

async function handleVerify(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();


setLoading(true);
setResult(null);

try {
  const response = await fetch("/api/verify-onchain-proof", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      proof_id: proofId,
      event_hash: eventHash,
    }),
  });

  const data = (await response.json()) as VerificationResponse;
  setResult(data);
} catch {
  setResult({
    success: false,
    mode: "stellar_testnet_verification",
    message: "Unable to verify proof on Stellar testnet.",
    verified: false,
    secretKeyExposed: false,
  });
} finally {
  setLoading(false);
}


}

function loadSuccessfulSample() {
setProofId("PS-1782739180173");
setEventHash(
"5a1ccfeed9615c3d049f21111635d1e036d4d32b38eba72e29ac31338b1bcb9c"
);
setResult(null);
}

function loadWrongHashSample() {
setProofId("PS-1782739180173");
setEventHash("wrong_hash_for_negative_verification_test");
setResult(null);
}

return ( <main className="page"> <nav className="navbar"> <a className="logo" href="/">
ProofSetu Protocol </a>


    <div className="nav-links">
      <a href="/">Home</a>
      <a href="/create">Create Proof</a>
      <a href="/verify">Verify On-chain</a>
      <a href="/proof/sample">Verify Sample</a>
      <a href="/testnet">Testnet Contract</a>
      <a href="/#use-cases">Use Cases</a>
      <a href="/#roadmap">Roadmap</a>
    </div>
  </nav>

  <section className="form-section">
    <div className="form-header">
      <div className="badge">Stellar Testnet Verification</div>

      <h1>Verify an on-chain proof</h1>

      <p>
        Enter a Proof ID and event hash to verify whether the hash matches
        the record stored in the deployed ProofSetu Soroban contract on
        Stellar testnet.
      </p>
    </div>

    <div className="verify-card" style={{ marginBottom: "24px" }}>
      <div className="verify-status">Verification API Live</div>

      <h2>On-chain verification status</h2>

      <p className="verify-description">
        This page calls the backend verification API, which checks the proof
        ID and event hash against the deployed Stellar testnet contract.
        Secret keys remain server-side and are never exposed.
      </p>

      <div className="verify-grid">
        <div>
          <span>Network</span>
          <strong>{STELLAR_TESTNET_CONFIG.network}</strong>
        </div>

        <div>
          <span>Contract</span>
          <strong>Configured</strong>
        </div>

        <div>
          <span>Verification Mode</span>
          <strong>Stellar testnet lookup</strong>
        </div>

        <div>
          <span>Secret Key</span>
          <strong>Not exposed</strong>
        </div>
      </div>

      <div className="hash-box">
        <strong>Contract ID</strong>
        <code>{STELLAR_TESTNET_CONFIG.contractId}</code>
      </div>
    </div>

    <div className="form-grid">
      <form className="proof-form" onSubmit={handleVerify}>
        <label>
          Proof ID
          <input
            value={proofId}
            onChange={(event) => setProofId(event.target.value)}
            placeholder="Example: PS-1782739180173"
            required
          />
        </label>

        <label>
          Event Hash
          <textarea
            value={eventHash}
            onChange={(event) => setEventHash(event.target.value)}
            placeholder="Paste the SHA-256 event hash here"
            required
          />
        </label>

        <button
          className="button button-primary"
          type="submit"
          disabled={loading}
        >
          {loading ? "Verifying on Stellar Testnet..." : "Verify Proof"}
        </button>

        <button
          className="button button-secondary"
          type="button"
          onClick={loadSuccessfulSample}
        >
          Load Successful Testnet Sample
        </button>

        <button
          className="button button-secondary"
          type="button"
          onClick={loadWrongHashSample}
        >
          Load Wrong Hash Sample
        </button>
      </form>

      <div className="result-card">
        <div className="card-label">Verification Result</div>

        {!result ? (
          <p className="empty-state">
            Enter a Proof ID and event hash, then verify it against the
            deployed Stellar testnet contract.
          </p>
        ) : (
          <>
            <div className="verify-status">
              {result.verified ? "Verified" : "Not Verified"}
            </div>

            <h2>
              {result.verified
                ? "Proof hash matched"
                : "Proof hash did not match"}
            </h2>

            <p className="verify-description">{result.message}</p>

            <div className="verify-grid">
              <div>
                <span>Mode</span>
                <strong>{result.mode || "stellar_testnet_verification"}</strong>
              </div>

              <div>
                <span>Network</span>
                <strong>{result.network || "testnet"}</strong>
              </div>

              <div>
                <span>Verified</span>
                <strong>{String(Boolean(result.verified))}</strong>
              </div>

              <div>
                <span>Secret Key Exposed</span>
                <strong>{String(Boolean(result.secretKeyExposed))}</strong>
              </div>
            </div>

            {result.proofId && (
              <div className="hash-box">
                <strong>Proof ID</strong>
                <code>{result.proofId}</code>
              </div>
            )}

            {result.eventHash && (
              <div className="hash-box">
                <strong>Event Hash</strong>
                <code>{result.eventHash}</code>
              </div>
            )}

            {result.contractId && (
              <div className="hash-box">
                <strong>Contract ID</strong>
                <code>{result.contractId}</code>
              </div>
            )}

            <pre className="json-preview">
              {JSON.stringify(result, null, 2)}
            </pre>
          </>
        )}
      </div>
    </div>
  </section>
</main>


);
}
