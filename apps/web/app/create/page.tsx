"use client";

import { useState } from "react";

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

export default function CreateProofPage() {
  const [proofType, setProofType] = useState("freelancer_milestone");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [creatorWallet, setCreatorWallet] = useState("");
  const [record, setRecord] = useState<ProofRecord | null>(null);

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
      status: "local_verified_sample",
    });
  }

  return (
    <main className="page">
      <nav className="navbar">
        <a className="logo" href="/">
          ProofSetu Protocol
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/create">Create Proof</a>
          <a href="/#use-cases">Use Cases</a>
          <a href="/#roadmap">Roadmap</a>
        </div>
      </nav>

      <section className="form-section">
        <div className="form-header">
          <div className="badge">Web MVP Feature</div>

          <h1>Create a proof record</h1>

          <p>
            Generate a local proof record and SHA-256 hash for a real-world
            workflow event. This first version does not write to Stellar yet.
            Stellar/Soroban testnet anchoring will be added in the next phase.
          </p>
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
