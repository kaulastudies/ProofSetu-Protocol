# Grant Readiness Summary

This document summarizes the current grant-readiness status of ProofSetu Protocol.

ProofSetu Protocol is being developed as an open-source verifiable workflow proof layer with planned Stellar/Soroban integration.

---

## Project Name

**ProofSetu Protocol**

## Short Description

ProofSetu Protocol creates verifiable workflow proof records for documents, milestones, invoices, grant deliverables, donation usage, cross-border service work, and AI-assisted decisions.

Private documents stay off-chain. Only hashes, timestamps, proof metadata, and verification references are used for transparent verification.

---

## Live Demo

* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample

---

## Current Status

ProofSetu Protocol has completed its initial Web MVP.

The current MVP includes:

* Public landing page
* Create Proof page
* Proof type selection
* Event details form
* Local SHA-256 hash generation
* Generated proof record preview
* JSON proof output
* Public sample verification page
* Documentation
* Example proof records
* Deployment guide
* Demo walkthrough

---

## Why ProofSetu Fits Stellar/Soroban

ProofSetu Protocol is designed for real-world workflows where trust, timestamping, and verification matter.

Stellar/Soroban can help ProofSetu move from local proof generation to on-chain proof anchoring.

The planned Stellar/Soroban integration will allow users to:

* Anchor proof hashes on Stellar testnet
* Connect proof records with wallet addresses
* Retrieve proof records from contract data
* Verify proof hashes publicly
* Prepare future links to payment, invoice, milestone, escrow, remittance, or stablecoin settlement flows

---

## Problem Being Solved

Many real-world workflows depend on proof, but the proof is often scattered across:

* WhatsApp messages
* Emails
* PDFs
* Screenshots
* Spreadsheets
* Internal tools
* Manual trackers

This creates problems such as:

* Disputes between clients and service providers
* Delayed approvals
* Weak audit trails
* Poor transparency in donation or grant usage
* Difficulty proving milestone completion
* Lack of accountability for AI-assisted decisions

---

## ProofSetu Solution

ProofSetu creates tamper-evident proof records for workflow events.

Each proof record may include:

* Proof ID
* Proof type
* Event title
* Description
* Reference ID
* Creator wallet
* Timestamp
* Event hash
* Network reference
* Verification status

The current MVP generates proof hashes locally.

The next phase will anchor proof records on Stellar/Soroban testnet.

---

## Privacy Design

ProofSetu Protocol is privacy-conscious by design.

The system does not store private documents on-chain.

Instead, it stores or displays:

* Hashes
* Timestamps
* Proof IDs
* Proof types
* Public verification metadata

Sensitive documents such as patient files, invoices, contracts, client files, private financial records, or personal data should not be stored publicly.

---

## Current MVP Demo Flow

1. User visits the homepage.
2. User opens the Create Proof page.
3. User enters workflow event details.
4. The app generates a local SHA-256 proof hash.
5. The generated proof record is displayed with JSON output.
6. User opens the public sample verification page.
7. The verification page displays proof metadata without exposing private files.

---

## Existing Use Cases

ProofSetu Protocol currently documents the following use cases:

1. Freelancer milestone proof
2. Invoice approval proof
3. NGO donation usage proof
4. Startup grant deliverable proof
5. Hospital document submission proof
6. AI-assisted decision proof
7. Cross-border service proof

---

## Phase 1 Completed

Phase 1 focused on Web MVP setup.

Completed items:

* Repository setup
* MIT License
* README
* Grant proposal document
* Architecture document
* Milestones document
* Roadmap document
* Use cases document
* Security policy
* Contributing guidelines
* Changelog
* Project status document
* Demo walkthrough
* Example proof records
* Landing page
* Create Proof page
* Local proof hash generation
* Public sample verification page
* Vercel deployment

---

## Phase 2 Proposal: Stellar/Soroban Testnet Integration

The next phase will focus on Stellar/Soroban integration.

Planned Phase 2 deliverables:

* Soroban proof registry contract
* Stellar testnet deployment
* Wallet connection
* On-chain proof creation
* On-chain proof retrieval
* On-chain proof verification
* Contract usage documentation
* Updated demo flow using Stellar testnet data

---

## Planned Soroban Contract Functions

The first proof registry contract can remain simple.

Planned functions:

* `create_proof`
* `get_proof`
* `verify_proof`

The goal is to keep the first contract small, auditable, and easy to test.

---

## Suggested Phase 2 Milestones

### Milestone 1 — Contract Draft

Deliverables:

* Basic Soroban proof registry contract
* Data structure for proof records
* Local contract tests
* Contract README

### Milestone 2 — Testnet Deployment

Deliverables:

* Deploy contract on Stellar testnet
* Publish contract ID
* Add usage guide
* Add sample proof creation transaction

### Milestone 3 — Web App Integration

Deliverables:

* Connect Web MVP to Stellar testnet
* Add wallet connection
* Write proof hash to contract
* Retrieve proof record from contract
* Show on-chain verification status in UI

### Milestone 4 — Documentation and Demo

Deliverables:

* Updated architecture documentation
* Updated demo walkthrough
* Screenshots
* Video walkthrough
* Grant submission summary

---

## Open Source Commitment

ProofSetu Protocol is open-source under the MIT License.

The project repository includes:

* Source code
* Documentation
* Example proof records
* Security policy
* Contributing guidelines
* Roadmap
* Demo walkthrough
* Deployment guide

All future core contract and Web MVP work will remain open-source.

---

## Grant Readiness Status

Current readiness level:

**Early but credible MVP**

Strengths:

* Public repo exists
* Live demo exists
* Documentation exists
* Use cases are clear
* Privacy design is clear
* Stellar/Soroban integration plan is documented
* Phase 1 issues have been completed and closed

Missing before stronger grant submission:

* Screenshots
* Short demo video
* Soroban contract draft
* Stellar testnet proof transaction
* Wallet connection
* More technical details for Phase 2 budget and timeline

---

## Immediate Next Steps

Recommended next steps:

1. Add screenshots to the repository.
2. Add a short demo video or walkthrough GIF.
3. Draft the Soroban proof registry contract.
4. Add Stellar testnet deployment notes.
5. Prepare a Phase 2 funding proposal.
6. Share the project with relevant Stellar/Soroban developer communities for feedback.

---

## Summary

ProofSetu Protocol has completed its first public Web MVP and is now ready to move toward Stellar/Soroban testnet integration.

The project demonstrates a simple but useful workflow:

Create proof → generate hash → display proof record → verify proof metadata publicly.

The next technical step is to anchor proof hashes on Stellar/Soroban testnet and connect proof records with wallet-based verification.
