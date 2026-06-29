export default function HomePage() {
return ( <main className="page"> <nav className="navbar"> <a className="logo" href="/">
ProofSetu Protocol </a>

```
    <div className="nav-links">
      <a href="#problem">Problem</a>
      <a href="#solution">Solution</a>
      <a href="/create">Create Proof</a>
      <a href="#use-cases">Use Cases</a>
      <a href="#roadmap">Roadmap</a>
    </div>
  </nav>

  <section className="hero">
    <div>
      <div className="badge">Built for Stellar/Soroban workflow proof</div>

      <h1>Verifiable proof for real-world work.</h1>

      <p>
        ProofSetu Protocol is an open-source workflow proof layer for
        documents, milestones, invoices, grant deliverables, and AI-assisted
        decisions. Private files stay off-chain. Only hashes, timestamps,
        and proof metadata are used for verification.
      </p>

      <div className="hero-actions">
        <a className="button button-primary" href="/create">
          Create Proof
        </a>

        <a className="button button-secondary" href="#use-cases">
          View use cases
        </a>
      </div>
    </div>

    <div className="hero-card">
      <div className="card-label">Sample Proof Record</div>
      <div className="proof-id">PS-FREE-0001</div>

      <div className="proof-row">
        <span>Proof Type</span>
        <span>Freelancer Milestone</span>
      </div>

      <div className="proof-row">
        <span>Network</span>
        <span>Stellar Testnet</span>
      </div>

      <div className="proof-row">
        <span>Event Hash</span>
        <span>sample_hash...</span>
      </div>

      <div className="proof-row">
        <span>Status</span>
        <span className="status">Verified</span>
      </div>
    </div>
  </section>

  <section className="section" id="problem">
    <h2>The problem</h2>

    <p className="section-intro">
      Important workflow proof is often scattered across WhatsApp, email,
      PDFs, screenshots, spreadsheets, and internal tools. This creates
      disputes, delayed approvals, weak audit trails, and poor transparency.
    </p>

    <div className="grid">
      <div className="feature-card">
        <h3>Scattered proof</h3>
        <p>
          Work evidence lives across many tools, making it difficult to
          prove when something was completed or submitted.
        </p>
      </div>

      <div className="feature-card">
        <h3>Weak verification</h3>
        <p>
          Screenshots and messages can be lost, edited, or disputed,
          especially in service delivery and payment workflows.
        </p>
      </div>

      <div className="feature-card">
        <h3>Privacy risk</h3>
        <p>
          Teams need proof without exposing sensitive documents, client
          data, patient records, or private invoices.
        </p>
      </div>
    </div>
  </section>

  <section className="section" id="solution">
    <h2>The solution</h2>

    <p className="section-intro">
      ProofSetu creates tamper-evident proof records for real-world workflow
      events. The first MVP generates proof records and hashes locally.
      Later, proof hashes will be anchored on Stellar/Soroban testnet.
    </p>

    <div className="steps">
      <div className="step">
        <div className="step-number">01</div>
        <h3>Create event</h3>
        <p>
          Enter workflow details such as proof type, title, and reference
          ID.
        </p>
      </div>

      <div className="step">
        <div className="step-number">02</div>
        <h3>Generate hash</h3>
        <p>Create a tamper-evident hash from the proof metadata.</p>
      </div>

      <div className="step">
        <div className="step-number">03</div>
        <h3>Verify proof</h3>
        <p>View a public verification page without exposing private files.</p>
      </div>

      <div className="step">
        <div className="step-number">04</div>
        <h3>Anchor on Stellar</h3>
        <p>Future versions will store proof references on Stellar/Soroban.</p>
      </div>
    </div>
  </section>

  <section className="section" id="use-cases">
    <h2>Use cases</h2>

    <p className="section-intro">
      ProofSetu is designed for workflows where trust, timestamping, and
      privacy-conscious verification matter.
    </p>

    <div className="grid">
      <div className="feature-card">
        <h3>Freelancer milestones</h3>
        <p>
          Record proof when a landing page, dashboard, design file, or
          handover milestone is completed.
        </p>
      </div>

      <div className="feature-card">
        <h3>Invoice approvals</h3>
        <p>
          Create proof when invoices are submitted, approved, acknowledged,
          or linked to future payment flows.
        </p>
      </div>

      <div className="feature-card">
        <h3>NGO transparency</h3>
        <p>
          Record donation usage events without exposing beneficiary details
          or private receipts.
        </p>
      </div>

      <div className="feature-card">
        <h3>Grant deliverables</h3>
        <p>
          Help teams prove MVP delivery, testnet launches, documentation,
          demo videos, and milestone submissions.
        </p>
      </div>

      <div className="feature-card">
        <h3>Hospital documents</h3>
        <p>
          Create proof that operational or insurance documents were
          submitted without storing private patient records on-chain.
        </p>
      </div>

      <div className="feature-card">
        <h3>AI decision trails</h3>
        <p>
          Record summaries and verification metadata for AI-assisted
          workflow decisions.
        </p>
      </div>
    </div>
  </section>

  <section className="section" id="roadmap">
    <h2>MVP roadmap</h2>

    <p className="section-intro">
      The project starts with a simple web MVP and then moves toward
      Stellar/Soroban testnet integration.
    </p>

    <div className="grid">
      <div className="feature-card">
        <h3>Phase 1: Web MVP</h3>
        <p>
          Landing page, proof creation form, hash generation, local proof
          registry, and public verification page.
        </p>
      </div>

      <div className="feature-card">
        <h3>Phase 2: Stellar Testnet</h3>
        <p>
          Soroban proof registry contract, wallet connection, on-chain proof
          creation, and proof verification.
        </p>
      </div>

      <div className="feature-card">
        <h3>Phase 3: Grant readiness</h3>
        <p>
          Public demo, screenshots, documentation, video walkthrough, and
          community feedback.
        </p>
      </div>
    </div>
  </section>

  <footer className="footer">
    ProofSetu Protocol — open-source workflow proof infrastructure built for
    Stellar/Soroban integration.
  </footer>
</main>
```

);
}
