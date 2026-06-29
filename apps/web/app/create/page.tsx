"use client";

import { useState } from "react";
import { STELLAR_TESTNET_CONFIG } from "../../lib/stellar-testnet";

type ProofRecord = {
proof_id: string;
proof_type: string;
title: string;
description: string;
reference_id: string;
creator_wallet: string;
network: string;
event_hash: string;
status: string;
created_at: string;
};

type OnchainStatus =
| "pending"
| "ready"
| "submitting"
| "stellar_success"
| "stellar_error";

type ApiResponse = {
success?: boolean;
status?: string;
mode?: string;
message?: string;
contractId?: string;
network?: string;
apiCallerPublicKey?: string;
transactionHash?: string;
stellarStatus?: string;
secretKeyExposed?: boolean;
proof?: {
proof_id?: string;
proof_type?: string;
event_hash?: string;
creator?: string;
reference_id?: string;
timestamp?: string;
};
nextStep?: string;
missingFields?: string[];
};

export default function CreateProofPage() {
const [proofType, setProofType] = useState("freelancer_milestone");
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");
const [referenceId, setReferenceId] = useState("");
const [creatorWallet, setCreatorWallet] = useState("");
const [record, setRecord] = useState<ProofRecord | null>(null);
const [onchainStatus, setOnchainStatus] = useState<OnchainStatus>("pending");
const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

async function generateHash(input: string) {
const encoder = new TextEncoder();
const data = encoder.encode(input);
const hashBuffer = await crypto.subtle.digest("SHA-256", data);
const hashArray = Array.from(new Uint8Array(hashBuffer));


return hashArray
  .map((byte) => byte.toString(16).padStart(2, "0"))
  .join("");


}

async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();


const createdAt = new Date().toISOString();
const proofId = `PS-${Date.now()}`;

const proofPayload = {
  proof_id: proofId,
  proof_type: proofType,
  title,
  description,
  reference_id: referenceId,
  creator_wallet: creatorWallet || "sample_stellar_testnet_wallet",
  network: "stellar_testnet",
  created_at: createdAt,
};

const eventHash = await generateHash(JSON.stringify(proofPayload));

setRecord({
  ...proofPayload,
  event_hash: eventHash,
  status: "local_proof_generated",
});

setApiResponse(null);
setOnchainStatus("ready");


}

async function handleStellarSubmit() {
if (!record) {
return;
}


setOnchainStatus("submitting");
setApiResponse(null);

try {
  const response = await fetch("/api/create-onchain-proof", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      proof_id: record.proof_id,
      proof_type: record.proof_type,
      event_hash: record.event_hash,
      creator: record.creator_wallet,
      reference_id: record.reference_id,
      timestamp: record.created_at,
    }),
  });

  const data = (await response.json()) as ApiResponse;

  setApiResponse(data);

  if (response.ok && data.success && data.transactionHash) {
    setOnchainStatus("stellar_success");
  } else {
    setOnchainStatus("stellar_error");
  }
} catch {
  setApiResponse({
    success: false,
    mode: "stellar_testnet_invocation",
    message: "Unable to submit proof to Stellar testnet.",
    secretKeyExposed: false,
  });

  setOnchainStatus("stellar_error");
}


}

function getOnchainStatusText() {
if (onchainStatus === "pending") {
return "Pending";
}


if (onchainStatus === "ready") {
  return "Ready for Stellar testnet";
}

if (onchainStatus === "submitting") {
  return "Submitting proof to Stellar testnet";
}

if (onchainStatus === "stellar_success") {
  return "Submitted to Stellar testnet";
}

return "Stellar testnet submission failed";


}

function getModeText() {
if (onchainStatus === "stellar_success") {
return "Local proof + real Stellar testnet transaction";
}


if (onchainStatus === "submitting") {
  return "Submitting to Stellar testnet";
}

return "Local proof + backend-assisted Stellar API";


}

return ( <main className="page"> <nav className="navbar"> <a className="logo" href="/">
ProofSetu Protocol </a>


    <div className="nav-links">
      <a href="/">Home</a>
      <a href="/create">Create Proof</a>
      <a href="/proof/sample">Verify Sample</a>
      <a href="/testnet">Testnet Contract</a>
      <a href="/#use-cases">Use Cases</a>
      <a href="/#roadmap">Roadmap</a>
    </div>
  </nav>

  <section className="form-section">
    <div className="form-header">
      <div className="badge">Stellar Testnet MVP</div>

      <h1>Create a proof record</h1>

      <p>
        Generate a local proof record, create a SHA-256 event hash, and
        submit the proof to the deployed ProofSetu Soroban contract on
        Stellar testnet through a secure backend-assisted API route.
      </p>
    </div>

    <div className="verify-card" style={{ marginBottom: "24px" }}>
      <div className="verify-status">Stellar Testnet Live</div>

      <h2>Proof anchoring status</h2>

      <p className="verify-description">
        ProofSetu now supports backend-assisted proof submission to a
        deployed Soroban proof registry contract on Stellar testnet. Secret
        keys stay server-side and are never exposed in the frontend.
      </p>

      <div className="verify-grid">
        <div>
          <span>Local Proof Hash</span>
          <strong>{record ? "Generated" : "Waiting for form input"}</strong>
        </div>

        <div>
          <span>Stellar Testnet Contract</span>
          <strong>Configured</strong>
        </div>

        <div>
          <span>On-chain Submission</span>
          <strong>{getOnchainStatusText()}</strong>
        </div>

        <div>
          <span>Current Mode</span>
          <strong>{getModeText()}</strong>
        </div>
      </div>

      <div className="hash-box">
        <strong>Contract ID</strong>
        <code>{STELLAR_TESTNET_CONFIG.contractId}</code>
      </div>

      <div className="hash-box">
        <strong>Network</strong>
        <code>{STELLAR_TESTNET_CONFIG.network}</code>
      </div>

      {apiResponse?.transactionHash && (
        <div className="hash-box">
          <strong>Latest Stellar Transaction Hash</strong>
          <code>{apiResponse.transactionHash}</code>
        </div>
      )}
    </div>

    <div className="form-grid">
      <form className="proof-form" onSubmit={handleSubmit}>
        <label>
          Proof Type
          <select
            value={proofType}
            onChange={(event) => setProofType(event.target.value)}
          >
            <option value="freelancer_milestone">
              Freelancer Milestone
            </option>
            <option value="invoice_approval">Invoice Approval</option>
            <option value="ngo_donation_usage">NGO Donation Usage</option>
            <option value="grant_deliverable">Grant Deliverable</option>
            <option value="hospital_document_submission">
              Hospital Document Submission
            </option>
            <option value="ai_decision_summary">
              AI Decision Summary
            </option>
          </select>
        </label>

        <label>
          Title
          <input
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Example: Landing Page MVP Completed"
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe the workflow event being recorded."
            required
          />
        </label>

        <label>
          Reference ID
          <input
            value={referenceId}
            onChange={(event) => setReferenceId(event.target.value)}
            placeholder="Example: PROOFSETU-MVP-001"
            required
          />
        </label>

        <label>
          Creator Wallet
          <input
            value={creatorWallet}
            onChange={(event) => setCreatorWallet(event.target.value)}
            placeholder="Optional: Stellar testnet wallet address"
          />
        </label>

        <button className="button button-primary" type="submit">
          Generate Proof Hash
        </button>
      </form>

      <div className="result-card">
        <div className="card-label">Generated Proof Record</div>

        {!record ? (
          <p className="empty-state">
            Fill the form and generate a proof hash. The result will appear
            here.
          </p>
        ) : (
          <>
            <div className="proof-id">{record.proof_id}</div>

            <div className="proof-row">
              <span>Proof Type</span>
              <span>{record.proof_type}</span>
            </div>

            <div className="proof-row">
              <span>Network</span>
              <span>{record.network}</span>
            </div>

            <div className="proof-row">
              <span>Status</span>
              <span className="status">{record.status}</span>
            </div>

            <div className="hash-box">
              <strong>Event Hash</strong>
              <code>{record.event_hash}</code>
            </div>

            <div className="hash-box">
              <strong>Stellar Testnet Submission</strong>
              <p>
                This sends the generated proof payload to the backend API,
                which submits the proof to the deployed Soroban contract on
                Stellar testnet.
              </p>

              <button
                className="button button-secondary"
                type="button"
                onClick={handleStellarSubmit}
                disabled={onchainStatus === "submitting"}
                style={{ marginTop: "14px" }}
              >
                {onchainStatus === "submitting"
                  ? "Submitting to Stellar Testnet..."
                  : "Submit Proof to Stellar Testnet"}
              </button>
            </div>

            {apiResponse && (
              <div className="hash-box">
                <strong>Stellar Submission Response</strong>
                <p>{apiResponse.message}</p>

                {apiResponse.transactionHash && (
                  <div className="proof-row">
                    <span>Transaction Hash</span>
                    <span>{apiResponse.transactionHash}</span>
                  </div>
                )}

                {apiResponse.stellarStatus && (
                  <div className="proof-row">
                    <span>Stellar Status</span>
                    <span>{apiResponse.stellarStatus}</span>
                  </div>
                )}

                <pre className="json-preview">
                  {JSON.stringify(apiResponse, null, 2)}
                </pre>
              </div>
            )}

            <pre className="json-preview">
              {JSON.stringify(record, null, 2)}
            </pre>
          </>
        )}
      </div>
    </div>
  </section>
</main>


);
}
