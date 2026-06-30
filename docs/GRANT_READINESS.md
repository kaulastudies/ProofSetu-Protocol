git add README.md docs/GRANT_READINESS.md
git commit -m "Clean duplicate demo video links"
git push origin main
git status
# ProofSetu Protocol — Grant Readiness

ProofSetu Protocol is an open-source verifiable workflow proof layer built on Stellar/Soroban.

The project is now grant-ready at the Stellar testnet MVP level because it demonstrates a working end-to-end proof flow:

Create proof → generate event hash → submit to Stellar testnet → receive transaction hash → verify proof dynamically using Proof ID and Event Hash.

---

## Current Grant Readiness Status

Status: Ready for v0.3.0 release preparation

ProofSetu has completed the core technical proof-of-concept required for a serious open-source Stellar/Soroban MVP.

Completed:

* Public GitHub repository
* MIT License
* Documentation
* Web MVP live on Vercel
* Proof creation UI
* Local SHA-256 event hash generation
* Soroban proof registry contract
* Local Soroban contract tests
* Stellar testnet contract deployment
* Backend-assisted Stellar testnet proof submission
* Real Stellar transaction hash returned to frontend
* Dynamic on-chain verification API
* Public Verify On-chain page
* Successful verification using Proof ID and Event Hash
* Wrong hash verification returning false
* Safe environment variable handling
* Secret key not exposed

---

## Live Demo

* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify On-chain: https://proof-setu-protocol.vercel.app/verify
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample
* Testnet Contract: https://proof-setu-protocol.vercel.app/testnet
* Environment Check API: https://proof-setu-protocol.vercel.app/api/env-check
* On-chain Proof API: https://proof-setu-protocol.vercel.app/api/create-onchain-proof
* On-chain Verification API: https://proof-setu-protocol.vercel.app/api/verify-onchain-proof

### Demo Video

ProofSetu Protocol v0.3.0 demo video: https://youtu.be/7EKzgLwDhE0
---

## Repository

GitHub Repository:

https://github.com/kaulastudies/ProofSetu-Protocol

Current recommended release:

`v0.3.0`

---

## Problem Statement

Important real-world work often depends on scattered proof across WhatsApp, email, PDFs, screenshots, spreadsheets, payment records, and internal tools.

This creates:

* Payment disputes
* Delayed approvals
* Weak audit trails
* Low trust between parties
* Poor accountability for AI-assisted workflows
* Difficulty proving that a milestone, document, invoice, or deliverable existed at a specific time

Examples:

* A freelancer says work was completed.
* A client says the milestone was not approved.
* An NGO wants to prove donation usage.
* A startup wants to prove grant deliverables.
* A hospital wants to prove that a claim document was submitted.
* An AI-assisted workflow needs a verifiable decision trail.

---

## Proposed Solution

ProofSetu Protocol creates verifiable proof records for real-world workflow events.

A proof record can include:

* Proof ID
* Proof type
* Event title
* Event description
* SHA-256 event hash
* Timestamp
* Creator reference
* Stellar network reference
* Transaction hash
* Verification result

ProofSetu does not expose private documents on-chain.

Instead, it anchors proof metadata and hashes so users can later verify that a specific workflow event existed and that its hash matches the stored record.

---

## Why Stellar/Soroban

Stellar is suitable for ProofSetu because the protocol is designed around real-world trust, payments, milestones, invoices, grants, remittances, and settlement workflows.

Soroban enables ProofSetu to store and verify workflow proof records through smart contracts.

ProofSetu can later connect proof records with:

* Milestone payments
* Invoice settlement
* Grant disbursement
* NGO transparency
* Cross-border service work
* Stablecoin payment flows
* Escrow-style release logic

---

## Completed Technical Scope

### Web MVP

Completed:

* Landing page
* Create Proof page
* Proof type selection
* Event details form
* Local SHA-256 event hash generation
* Generated proof record JSON output
* Sample verification page
* Testnet contract information page
* Verify On-chain page

### Soroban Contract

Completed:

* Proof registry contract scaffold
* `create_proof`
* `get_proof`
* `verify_proof`
* Local tests
* Stellar testnet deployment
* Initial contract invocation
* Correct hash verification
* Wrong hash verification

### Backend/API

Completed:

* `/api/env-check`
* `/api/create-onchain-proof`
* `/api/verify-onchain-proof`
* Server-side Stellar configuration helper
* Backend-assisted Stellar transaction submission
* Dynamic proof verification through Stellar testnet simulation
* Safe API responses without exposing secret keys

### Frontend Integration

Completed:

* Create Proof page connected to backend API
* Real Stellar transaction hash displayed in frontend
* Stellar SUCCESS status displayed in frontend
* Verify On-chain page connected to verification API
* Verified true/false result displayed publicly

---

## Stellar Testnet Details

Network:

`testnet`

Contract ID:

`CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ`

Wasm hash:

`743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166`

Deployer public address:

`GAT2L4GYPN2TST44AQA6QFVNWB4BUM7SXC73B4D5Y7PA4YRNHCLL`

Deployment transaction:

`5ee448eb186c966fe6965fa7282b94d78a96df4e596dd9d0f6326cf3d0f6261b`

Initial create proof transaction:

`8a7fd049fcaf57e0c438a1b521b08cd30afe762cd6b74c172c302faccd98f132`

Successful verified proof sample:

* Proof ID: `PS-1782748239799`
* Event Hash: `775fbc34077813ca0cdd0941af51872c4eb0890bae5c58a8590f74f541347d9e`
* Verification result: `true`
* Secret key exposed: `false`

---

## Current Working Demo Flow

### Create Proof Flow

1. User opens Create Proof page.
2. User enters workflow event details.
3. Browser generates a SHA-256 event hash.
4. User submits proof to Stellar testnet.
5. Backend API signs and submits the transaction.
6. Soroban contract stores the proof record.
7. API returns Stellar transaction hash.
8. Frontend displays transaction hash and SUCCESS status.

### Verify Proof Flow

1. User opens Verify On-chain page.
2. User enters Proof ID and Event Hash.
3. Frontend sends values to verification API.
4. Backend checks the deployed Soroban contract.
5. API returns verified true/false.
6. Frontend displays verification result.

---

## Security Readiness

Implemented:

* Secret key stored only as Vercel environment variable
* Secret key not committed to GitHub
* Secret key not exposed in frontend code
* Secret key not exposed in API responses
* Secret key not shown in README
* Secret key not shown in screenshots
* API responses include `secretKeyExposed: false`

Safe public values:

* Contract ID
* Public testnet address
* Transaction hash
* Wasm hash
* Proof ID
* Event hash
* Verification result

Private values that must never be exposed:

* Secret key
* Private key
* Seed phrase
* Mainnet wallet secret
* API secrets
* Client documents
* Patient records
* Identity documents
* Financial documents

---

## Screenshots Available

Current screenshots include:

* Homepage
* Create Proof page
* Generated proof hash
* Sample verification page
* Stellar testnet contract page
* Create Proof page with Stellar config
* Create Proof on-chain placeholder
* Verify Sample page with Stellar section
* Create Proof API scaffold response
* Create Proof Stellar testnet success
* Verify On-chain proof success

These screenshots support grant review, README clarity, and demo validation.

---

## Grant-Ready Strengths

ProofSetu is now strong for grant review because it is not only a concept.

It includes:

* A live deployed web MVP
* A deployed Soroban contract
* A real Stellar testnet contract ID
* Real testnet transactions
* A working backend integration
* A dynamic verification flow
* Public screenshots
* Clear documentation
* Security notes
* Open-source repository structure
* Practical real-world use cases

The project demonstrates a concrete Stellar/Soroban workflow proof use case.

---

## Suggested Grant Positioning

ProofSetu Protocol can be positioned as:

A verifiable workflow proof layer for real-world milestones, invoices, grants, NGO transparency, hospital document submissions, and AI-assisted decision trails, built on Stellar/Soroban.

Short pitch:

ProofSetu converts important workflow events into verifiable proof records. It generates a SHA-256 event hash, anchors proof metadata to a Soroban contract on Stellar testnet, returns a real transaction hash, and allows anyone to verify the proof using Proof ID and Event Hash without exposing private documents.

---

## Suggested Grant Ask

Recommended grant ask:

`$30,000`

Reasoning:

ProofSetu Protocol has already completed a working Stellar/Soroban testnet MVP. The project includes a live web demo, deployed Soroban proof registry contract, backend-assisted Stellar testnet proof submission, real transaction hash return, dynamic on-chain proof verification, security-safe environment variable handling, documentation, screenshots, and practical real-world use cases.

The requested grant would support moving ProofSetu from a working testnet MVP into a polished open-source protocol layer with stronger UX, wallet-based proof ownership, proof history, reusable workflow templates, public proof lookup, developer documentation, and mainnet-readiness preparation.

---

## Proposed Grant Milestones

Total requested grant amount:

`$30,000`

### Budget Summary

| Milestone   |                           Focus Area |        Amount |
| ----------- | -----------------------------------: | ------------: |
| Milestone 1 |            Public Testnet MVP Polish |      `$7,500` |
| Milestone 2 | Proof History and Workflow Templates |      `$8,000` |
| Milestone 3 |         Wallet and Organization Flow |      `$8,000` |
| Milestone 4 |             Mainnet Readiness Review |      `$6,500` |
| **Total**   |                                      | **`$30,000`** |

---

### Milestone 1 — Public Testnet MVP Polish

Amount:

`$7,500`

Goal:

Polish the current Stellar testnet MVP into a clean public release suitable for developers, grant reviewers, and early users.

Deliverables:

* Clean UI polish
* Improved verification page
* README and documentation polish
* Demo walkthrough
* Architecture diagram
* Final screenshots
* `v0.3.0` GitHub release

---

### Milestone 2 — Proof History and Workflow Templates

Amount:

`$8,000`

Goal:

Add reusable proof workflows and proof history so users can create structured proof records for real-world use cases.

Deliverables:

* Proof history storage
* Use-case templates
* Freelancer milestone proof template
* Grant deliverable proof template
* Invoice approval proof template
* NGO transparency proof template
* Improved proof record structure

---

### Milestone 3 — Wallet and Organization Flow

Amount:

`$8,000`

Goal:

Add wallet-based proof ownership and organization-level workflows so teams, founders, NGOs, freelancers, and businesses can manage proofs more clearly.

Deliverables:

* Wallet-based user flow
* Organization dashboard
* Creator proof ownership
* Public proof lookup
* Better access and verification model
* Improved frontend flow for proof creators and proof viewers

---

### Milestone 4 — Mainnet Readiness Review

Amount:

`$6,500`

Goal:

Prepare ProofSetu for responsible mainnet planning through security review, documentation, deployment checks, and production-readiness work.

Deliverables:

* Security review
* Mainnet deployment checklist
* Better error handling
* Documentation for developers
* Production deployment plan
* Mainnet readiness summary

---

## v0.3.0 Release Goal

The `v0.3.0` release should represent the first complete Stellar testnet MVP.

Release summary:

ProofSetu Protocol can create a workflow proof, generate a SHA-256 event hash, submit the proof to a deployed Soroban contract on Stellar testnet, return a real Stellar transaction hash, and verify the proof dynamically using Proof ID and Event Hash.

---

## Remaining Before v0.3.0

Tasks:

* Confirm README screenshots render correctly
* Update Project Status
* Update Grant Readiness
* Update Demo Walkthrough
* Confirm all Vercel pages are live
* Confirm all API routes are safe
* Create v0.3.0 GitHub release
* Prepare demo video script
* Prepare final grant submission summary

---

## Final Readiness Summary

ProofSetu Protocol is ready for a `v0.3.0` release and grant-readiness packaging.

The project now demonstrates a real Stellar/Soroban use case with working testnet deployment, backend-assisted proof submission, and dynamic on-chain verification.

The next priority is documentation polish, release packaging, and demo presentation.

## Demo Video

ProofSetu Protocol v0.3.0 demo video: https://youtu.be/7EKzgLwDhE0

