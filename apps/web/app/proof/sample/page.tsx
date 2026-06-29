const sampleProof = {
  proof_id: "PS-FREE-0001",
  proof_type: "Freelancer Milestone",
  title: "Landing Page MVP Completed",
  description:
    "Initial landing page and create proof page were deployed on Vercel as part of the ProofSetu Protocol Web MVP.",
  reference_id: "PROOFSETU-MVP-001",
  event_hash:
    "8f14e45fceea167a5a36dedd4bea2543a9f4f2c9e9f2f8d9c7a3d1b4f5e6a789",
  creator_wallet: "sample_stellar_testnet_wallet",
  network: "stellar_testnet",
  status: "local_verified_sample",
  created_at: "2026-06-29T00:00:00Z",
};

export default function SampleProofPage() {
  return (
    <main className="page">
      <nav className="navbar">
        <a className="logo" href="/">
          ProofSetu Protocol
        </a>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/create">Create Proof</a>
          <a href="/proof/sample">Verify Sample</a>
          <a href="/#roadmap">Roadmap</a>
        </div>
      </nav>

      <section className="verify-section">
        <div className="verify-header">
          <div className="badge">Public Verification Page</div>

          <h1>Verify proof record</h1>

          <p>
            This page demonstrates how a proof record can be publicly verified
            without exposing private files. This first MVP uses local sample
            data. Stellar/Soroban testnet verification will be added in the next
            phase.
          </p>
        </div>

        <div className="verify-card">
          <div className="verify-status">Verified Sample</div>

          <h2>{sampleProof.proof_id}</h2>

          <p className="verify-description">{sampleProof.description}</p>

          <div className="verify-grid">
            <div>
              <span>Proof Type</span>
              <strong>{sampleProof.proof_type}</strong>
            </div>

            <div>
              <span>Title</span>
              <strong>{sampleProof.title}</strong>
            </div>

            <div>
              <span>Reference ID</span>
              <strong>{sampleProof.reference_id}</strong>
            </div>

            <div>
              <span>Network</span>
              <strong>{sampleProof.network}</strong>
            </div>

            <div>
              <span>Status</span>
              <strong>{sampleProof.status}</strong>
            </div>

            <div>
              <span>Created At</span>
              <strong>{sampleProof.created_at}</strong>
            </div>
          </div>

          <div className="hash-box">
            <strong>Event Hash</strong>
            <code>{sampleProof.event_hash}</code>
          </div>

          <div className="hash-box">
            <strong>Creator Wallet</strong>
            <code>{sampleProof.creator_wallet}</code>
          </div>

          <pre className="json-preview">
            {JSON.stringify(sampleProof, null, 2)}
          </pre>
        </div>
      </section>
    </main>
  );
}
