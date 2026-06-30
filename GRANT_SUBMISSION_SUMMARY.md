# ProofSetu Protocol — Grant Submission Summary

## Project Name

ProofSetu Protocol

## Short Description

ProofSetu Protocol is an open-source verifiable workflow proof layer built on Stellar/Soroban.

It helps users create proof records for real-world workflow events, generate a SHA-256 event hash, submit the proof to a deployed Soroban contract on Stellar testnet, receive a real Stellar transaction hash, and verify the proof dynamically using Proof ID and Event Hash.

---

## One-Line Pitch

ProofSetu converts important workflow events into verifiable Stellar/Soroban proof records without exposing private documents.

---

## Live Links

* Live Demo: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify On-chain: https://proof-setu-protocol.vercel.app/verify
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample
* Testnet Contract: https://proof-setu-protocol.vercel.app/testnet
* Environment Check API: https://proof-setu-protocol.vercel.app/api/env-check
* On-chain Proof API: https://proof-setu-protocol.vercel.app/api/create-onchain-proof
* On-chain Verification API: https://proof-setu-protocol.vercel.app/api/verify-onchain-proof

---

## Repository

GitHub Repository:

https://github.com/kaulastudies/ProofSetu-Protocol

Latest release:

`v0.3.0 — Stellar Testnet MVP with Dynamic Proof Verification`

Release link:

https://github.com/kaulastudies/ProofSetu-Protocol/releases/tag/v0.3.0

---

## Problem

Important real-world work often depends on scattered evidence across WhatsApp messages, emails, PDFs, screenshots, spreadsheets, payment records, and internal tools.

This creates problems such as:

* Payment disputes
* Delayed approvals
* Weak audit trails
* Poor accountability
* Difficulty proving milestone completion
* Difficulty proving grant deliverables
* Difficulty proving invoice approval
* Difficulty proving document submission
* Difficulty tracking AI-assisted decisions

Examples:

* A freelancer says a milestone was completed.
* A client says the milestone was not approved.
* An NGO wants to prove donation usage.
* A startup wants to prove grant deliverables.
* A hospital wants to prove that a claim document was submitted.
* An AI-assisted workflow needs a verifiable decision trail.

---

## Solution

ProofSetu Protocol creates verifiable proof records for workflow events.

A proof record can include:

* Proof ID
* Proof type
* Event title
* Event description
* SHA-256 event hash
* Timestamp
* Creator reference
* Stellar network reference
* Stellar transaction hash
* Verification result

ProofSetu does not store sensitive documents on-chain.

Instead, it anchors proof metadata and hashes so users can later verify that a workflow event existed and that its hash matches the stored proof record.

---

## Why Stellar/Soroban

ProofSetu uses Stellar/Soroban because Stellar is designed for fast, low-cost, open financial infrastructure.

The project is naturally aligned with real-world trust workflows such as:

* Freelancer milestone payments
* Invoice approvals
* Grant deliverables
* NGO transparency
* Cross-border service work
* Stablecoin settlement flows
* Escrow-style release logic
* AI-assisted workflow accountability

Soroban allows ProofSetu to create smart contract-based proof records that can be verified publicly without exposing private documents.

---

## Current Working MVP

The current `v0.3.0` MVP supports:

* Web MVP live on Vercel
* Create Proof page
* Local SHA-256 event hash generation
* Backend-assisted Stellar testnet proof submission
* Real Stellar transaction hash returned to frontend
* Dynamic on-chain proof verification API
* Verify On-chain frontend page
* Correct Proof ID and Event Hash returning `verified: true`
* Wrong hash returning `verified: false`
* Secret key stored server-side only
* Public documentation and screenshots

---

## Current Working Flow

1. User opens the Create Proof page.
2. User enters workflow proof details.
3. Browser generates a SHA-256 event hash.
4. User submits the proof to Stellar testnet.
5. Backend API signs and submits the proof to the deployed Soroban contract.
6. Stellar testnet returns a transaction hash and SUCCESS status.
7. User opens the Verify On-chain page.
8. User enters Proof ID and Event Hash.
9. Backend verification API checks the deployed Soroban contract.
10. Frontend displays verified true/false result.

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

---

## Verified Sample

Current successful verified sample:

* Proof ID: `PS-1782748239799`
* Event Hash: `775fbc34077813ca0cdd0941af51872c4eb0890bae5c58a8590f74f541347d9e`
* Verification result: `true`
* Secret key exposed: `false`

This sample can be tested on:

https://proof-setu-protocol.vercel.app/verify

---

## Security Model

ProofSetu keeps secrets server-side.

Implemented security precautions:

* Secret key stored only in Vercel environment variables
* Secret key not committed to GitHub
* Secret key not exposed in frontend code
* Secret key not exposed in API responses
* Secret key not shown in screenshots
* Secret key not shown in documentation
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

## Screenshots

Current screenshots include:

* Homepage
* Create Proof page
* Generated proof hash
* Sample verification page
* Stellar testnet contract page
* Create Proof page with Stellar config
* Create Proof API scaffold response
* Create Proof Stellar testnet success
* Verify On-chain proof success

Screenshot folder:

`screenshots/`

---

## Grant Request

Requested grant amount:

`$30,000`

Reasoning:

ProofSetu already has a working Stellar/Soroban testnet MVP with live demo, deployed contract, backend-assisted proof submission, dynamic proof verification, documentation, screenshots, and a public release.

The requested grant will support moving ProofSetu from a working testnet MVP into a stronger open-source protocol layer with better UX, proof history, workflow templates, wallet-based proof ownership, public proof lookup, developer documentation, and mainnet-readiness preparation.

---

## Proposed Milestones

### Milestone 1 — Public Testnet MVP Polish

Amount:

`$7,500`

Deliverables:

* Clean UI polish
* Improved verification page
* README and documentation polish
* Demo walkthrough
* Architecture diagram
* Final screenshots
* `v0.3.0` release polish

---

### Milestone 2 — Proof History and Workflow Templates

Amount:

`$8,000`

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

Deliverables:

* Security review
* Mainnet deployment checklist
* Better error handling
* Documentation for developers
* Production deployment plan
* Mainnet readiness summary

---

## Total Budget

`$30,000`

---

## Why This Project Matters

ProofSetu addresses a common real-world trust problem: people need to prove that work, documents, approvals, claims, or decisions existed at a specific time.

Instead of depending only on scattered screenshots and messages, ProofSetu creates a verifiable proof trail using Stellar/Soroban.

This can be useful for:

* Freelancers
* Startups
* NGOs
* Hospitals
* Grant recipients
* Cross-border service providers
* AI-assisted workflow systems
* Small businesses handling approvals and invoices

---

## v0.3.0 Status

The `v0.3.0` release is published.

Release summary:

ProofSetu Protocol can now create a workflow proof, generate a SHA-256 event hash, submit the proof to a deployed Soroban contract on Stellar testnet, return a real Stellar transaction hash, and verify the proof dynamically using Proof ID and Event Hash.

---

## Next Roadmap

The next milestone is `v0.4.0`.

Planned focus:

* Proof history storage
* Wallet-based proof ownership
* Public proof lookup page
* Verification UI polish
* Workflow templates
* Better developer documentation
* Mainnet readiness planning

---

## Final Summary

ProofSetu Protocol is ready for grant review as a working Stellar/Soroban testnet MVP.

It is not only an idea or design document. It has:

* Live web app
* Deployed Soroban contract
* Real Stellar testnet transactions
* Dynamic proof verification
* Public documentation
* Security-conscious backend design
* Grant-ready roadmap

## Demo Video

ProofSetu Protocol v0.3.0 demo video: https://youtu.be/7EKzgLwDhE0

