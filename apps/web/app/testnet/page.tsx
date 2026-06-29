import { STELLAR_TESTNET_CONFIG } from "../../lib/stellar-testnet";

export default function TestnetPage() {
return ( <main className="page"> <nav className="navbar"> <a className="logo" href="/">
ProofSetu Protocol </a>
    


    <div className="nav-links">
      <a href="/">Home</a>
      <a href="/create">Create Proof</a>
      <a href="/proof/sample">Verify Sample</a>
      <a href="/testnet">Testnet Contract</a>
    </div>
  </nav>

  <section className="verify-section">
    <div className="verify-header">
      <div className="badge">Stellar Testnet Deployment</div>

      <h1>Proof Registry Contract</h1>

      <p>
        ProofSetu Protocol has deployed a Soroban proof registry contract on
        Stellar testnet. The contract can create, retrieve, and verify
        workflow proof records without storing private documents on-chain.
      </p>
    </div>

    <div className="verify-card">
      <div className="verify-status">Deployed on Stellar Testnet</div>

      <h2>Contract Details</h2>

      <p className="verify-description">
        This page displays the deployed Soroban proof registry contract used
        by ProofSetu Protocol for Phase 2 testnet verification.
      </p>

      <div className="verify-grid">
        <div>
          <span>Network</span>
          <strong>{STELLAR_TESTNET_CONFIG.network}</strong>
        </div>

        <div>
          <span>Sample Proof ID</span>
          <strong>{STELLAR_TESTNET_CONFIG.sampleProofId}</strong>
        </div>

        <div>
          <span>Contract ID</span>
          <strong>{STELLAR_TESTNET_CONFIG.contractId}</strong>
        </div>

        <div>
          <span>Deployer Public Address</span>
          <strong>{STELLAR_TESTNET_CONFIG.deployerPublicAddress}</strong>
        </div>

        <div>
          <span>Deployment Transaction</span>
          <strong>{STELLAR_TESTNET_CONFIG.deploymentTransaction}</strong>
        </div>

        <div>
          <span>Create Proof Transaction</span>
          <strong>{STELLAR_TESTNET_CONFIG.createProofTransaction}</strong>
        </div>
      </div>

      <div className="hash-box">
        <strong>Wasm Hash</strong>
        <code>{STELLAR_TESTNET_CONFIG.wasmHash}</code>
      </div>

      <div className="hash-box">
        <strong>Sample Event Hash</strong>
        <code>{STELLAR_TESTNET_CONFIG.sampleEventHash}</code>
      </div>

      <div className="hash-box">
        <strong>Verified Testnet Flow</strong>
        <p>
          create_proof returned true, get_proof returned the stored proof
          record, verify_proof with the correct hash returned true, and
          verify_proof with a wrong hash returned false.
        </p>
      </div>
    </div>
  </section>
</main>


);
}
