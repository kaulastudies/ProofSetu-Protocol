# ProofSetu Protocol

## Release reconciliation — 2 November 2026

[v0.3.0](https://github.com/kaulastudies/ProofSetu-Protocol/releases/tag/v0.3.0) was published on 29 June 2026. The next milestone is [v0.4.0, issue #6](https://github.com/kaulastudies/ProofSetu-Protocol/issues/6), which remains open. Earlier release-preparation instructions below are historical and superseded. Published release notes establish a release checkpoint; this correction does not revalidate current deployment health, retained testnet state, security or grant eligibility. Wallet ownership remains future scope.


ProofSetu Protocol is an open-source verifiable workflow proof layer built on Stellar/Soroban.
## Live Demo

* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample
* 🎥 Demo Video: [ProofSetu Protocol v0.3.0 — Stellar Testnet Proof Verification Demo](https://youtu.be/7EKzgLwDhE0)

## Current MVP Flow

1. Create a workflow proof record and SHA-256 document/event hash.
2. Submit or anchor the proof through the Stellar/Soroban testnet integration.
3. Retrieve the proof record from the deployed Soroban registry.
4. Verify the stored hash against the expected value.
5. Reject verification when the supplied hash does not match.
6. Inspect the public verification result and transaction evidence.

The current v0.3 flow includes a deployed Stellar testnet Soroban contract and verified `create_proof`, `get_proof`, and `verify_proof` behavior. Local hashing remains part of the client workflow, while testnet anchoring provides the external verification layer.


## Problem

Important real-world work often depends on scattered proof across WhatsApp, email, PDFs, screenshots, spreadsheets, and internal tools.

This creates disputes, delays, weak auditability, and lack of trust between parties.

Examples:

* A freelancer says a milestone was completed.
* A client says an invoice was approved or not approved.
* An NGO wants to prove donation usage.
* A startup wants to prove grant deliverables.
* A hospital wants to prove that a claim document was submitted.
* An AI-assisted workflow needs an accountable decision trail.

## Solution

ProofSetu Protocol creates verifiable proof records for real-world workflow events.

Each proof record can include:

* Proof ID
* Proof type
* Event title
* Short description
* Document or event hash
* Timestamp
* Creator wallet
* Network reference
* Verification status

The long-term goal is to anchor these proof records on Stellar/Soroban so anyone can verify that an event existed at a specific time without exposing private documents.

## Why Stellar

Stellar provides fast, low-cost, open financial infrastructure suitable for real-world payment and trust workflows.

ProofSetu uses Stellar/Soroban to make workflow proof records verifiable, transparent, and ready to connect with future payment, milestone, invoice, escrow, remittance, or stablecoin settlement flows.



## MVP Scope

The first version will include:

* Landing page
* Proof creation form
* Hash generation
* Local proof registry
* Public verification page
* Example proof records
* Stellar testnet integration roadmap
* Soroban proof registry contract roadmap

## Use Cases

1. Freelancer milestone proof
2. NGO donation usage proof
3. Startup grant deliverable proof
4. Invoice approval proof
5. Hospital document submission proof
6. AI-assisted decision proof

## Stellar Testnet Deployment

ProofSetu Protocol Phase 2 includes a deployed Soroban proof registry contract on Stellar testnet.

The contract has been built, tested locally, deployed to Stellar testnet, and invoked successfully.

### Contract Details

* Network: Stellar testnet
* Contract ID: `CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ`
* Wasm hash: `743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166`
* Deployer public address: `GAT2L4GYPN2TST44AQA6QFVNWB4BUM7SXC73B4D5Y7PA4YRNHCLL`

### Deployment Transactions

* Deployment transaction: `5ee448eb186c966fe6965fa7282b94d78a96df4e596dd9d0f6326cf3d0f6261b`
* Create proof transaction: `8a7fd049fcaf57e0c438a1b521b08cd30afe762cd6b74c172c302faccd98f132`

### Verified Testnet Flow

The deployed contract was tested successfully with a sample proof record.

* `create_proof` returned `true`
* `get_proof` returned the stored proof record
* `verify_proof` with correct hash returned `true`
* `verify_proof` with wrong hash returned `false`

Sample proof ID:

`PS-TESTNET-001`

Correct hash:

`sample_testnet_hash_001`

This confirms that ProofSetu Protocol can create, retrieve, and verify workflow proof records on Stellar testnet.


## Documentation

* [Grant Proposal](docs/GRANT_PROPOSAL.md)
* [Milestones](docs/MILESTONES.md)
* [Architecture](docs/ARCHITECTURE.md)
* [Use Cases](docs/USE_CASES.md)
* [Roadmap](docs/ROADMAP.md)
* [Deployment Guide](docs/DEPLOYMENT.md)
* [Project Status](PROJECT_STATUS.md)
* [Demo Walkthrough](docs/DEMO_WALKTHROUGH.md)
* [Grant Readiness](docs/GRANT_READINESS.md)
* [Phase 2 Stellar Plan](docs/PHASE_2_STELLAR_PLAN.md)
* [Soroban Contract Design](docs/SOROBAN_CONTRACT_DESIGN.md)

## Example Proof Records

* [Freelancer Milestone Proof](examples/freelancer-milestone-proof.json)
* [NGO Donation Usage Proof](examples/ngo-donation-proof.json)
* [Hospital Document Submission Proof](examples/hospital-document-proof.json)

## Current Status

ProofSetu Protocol has a published v0.3.0 Stellar testnet MVP.

Next tracked step: meet the v0.4.0 acceptance criteria in issue #6.
## Roadmap

### Completed

* Repository setup
* Documentation setup
* Web MVP live on Vercel
* Homepage
* Create Proof page
* Local SHA-256 proof hash generation
* Generated proof record JSON output
* Public sample verification page
* Stellar testnet contract information page
* Soroban proof registry contract scaffold
* Local Soroban contract tests
* Stellar testnet contract deployment
* Initial testnet contract invocation
* Frontend Stellar testnet config section
* API scaffold for on-chain proof submission
* Safe environment variable check API
* Backend invocation security notes
* Server-side Stellar configuration helper
* Backend-assisted Stellar testnet proof submission
* Real Stellar transaction hash returned to frontend
* Create Proof UI updated for Stellar testnet submission
* Dynamic on-chain proof verification API
* Verify On-chain frontend page
* Successful proof verification using proof ID and event hash
* Negative verification test using wrong hash
* Secret key stored server-side and not exposed
* README screenshots updated for Stellar submission and verification

### Current milestone

[v0.4.0, issue #6](https://github.com/kaulastudies/ProofSetu-Protocol/issues/6) tracks proof history, wallet ownership, public lookup, UI polish and workflow templates. Documentation, screenshots and a v0.4.0 release are also required before closure.

### Later

* Public proof lookup by transaction hash
* Better verification result styling
* Wallet-based user flow
* Database-backed proof history
* Organization dashboard
* File hash support
* Grant deliverable workflow template
* Invoice approval workflow template
* NGO transparency dashboard
* Hospital document submission workflow
* AI decision proof trail
* Mainnet readiness review

## Screenshots

### Homepage

![Homepage](screenshots/homepage.png)

### Create Proof Page

![Create Proof Page](screenshots/create-proof-form.png)

### Generated Proof Hash

![Generated Proof Hash](screenshots/generated-proof-hash.png)

### Sample Verification Page

![Sample Verification Page](screenshots/verify-sample-proof.png)

### Stellar Testnet Contract Page

![Stellar Testnet Contract Page](screenshots/testnet-contract.png)

### Create Proof Page with Stellar Config

![Create Proof Page with Stellar Config](screenshots/create-proof-stellar-config.png)

### Create Proof On-chain Placeholder

![Create Proof On-chain Placeholder](screenshots/create-proof-onchain-placeholder.png)

### Verify Sample Page with Stellar Section

![Verify Sample Page with Stellar Section](screenshots/verify-sample-stellar-section.png)

### Create Proof API Scaffold Response

![Create Proof API Scaffold Response](screenshots/create-proof-api-scaffold-response.png)

### Create Proof Stellar Testnet Success

![Create Proof Stellar Testnet Success](screenshots/create-proof-stellar-testnet-success.png)

### Verify On-chain Proof Success

![Verify On-chain Proof Success](screenshots/verify-onchain-proof-success.png)

## License

MIT

## Demo Video

ProofSetu Protocol v0.3.0 demo video: https://youtu.be/7EKzgLwDhE0

<!-- RAMA-SPONSORS-START -->

## Support continued development

If this project is useful to you, you can support **Rama Chandra's independent technical work**:

- GitHub Sponsors: https://github.com/sponsors/kaulastudies
- Direct support via PayPal: https://www.paypal.com/paypalme/malayanur92

Support helps fund public development, AI and evaluation experiments, testing, documentation, hosting and maintenance.

Funding does not automatically grant private repository access, contributor permissions, consulting, custom development, confidential data access or exclusive IP rights.

<!-- RAMA-SPONSORS-END -->
