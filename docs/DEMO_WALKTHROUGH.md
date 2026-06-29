# Demo Walkthrough

This document explains the current ProofSetu Protocol Web MVP demo flow.

## Live Demo Links


* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample

---

## MVP Purpose

The current Web MVP demonstrates how ProofSetu Protocol can create and display verifiable workflow proof records.

The MVP currently uses local proof generation. Stellar/Soroban testnet anchoring will be added in Phase 2.

---

## Demo Flow

### 1. Open the Homepage

Visit:

https://proof-setu-protocol.vercel.app/

The homepage explains:

* The problem ProofSetu solves
* The workflow proof concept
* Privacy-first design
* Stellar/Soroban integration roadmap
* Use cases such as freelancer milestones, invoices, grants, NGOs, hospitals, and AI decision trails

---

### 2. Open Create Proof Page

Visit:

https://proof-setu-protocol.vercel.app/create

The Create Proof page allows a user to enter workflow event details.

Example data:

* Proof Type: Freelancer Milestone
* Title: Landing Page MVP Completed
* Description: Initial landing page, create proof page, and verification sample deployed on Vercel.
* Reference ID: PROOFSETU-MVP-001
* Creator Wallet: sample_stellar_testnet_wallet

---

### 3. Generate Proof Hash

After submitting the form, the app generates a local SHA-256 hash from the proof metadata.

The generated proof record displays:

* Proof ID
* Proof type
* Network
* Status
* Event hash
* JSON proof output

This demonstrates the core ProofSetu idea: create a tamper-evident proof record without exposing private files.

---

### 4. Open Public Verification Page

Visit:

https://proof-setu-protocol.vercel.app/proof/sample

The verification page shows a public sample proof record.

It displays:

* Proof ID
* Proof type
* Title
* Reference ID
* Network
* Status
* Timestamp
* Event hash
* Creator wallet
* JSON proof preview

This demonstrates how a proof record can be publicly verified while keeping private documents off-chain.

---

## Privacy Design

ProofSetu Protocol does not store private documents on-chain.

The current MVP and future Stellar/Soroban integration are designed to store only:

* Hashes
* Timestamps
* Proof IDs
* Proof types
* Verification metadata

Private documents, client files, patient records, invoices, and sensitive data should never be committed to the repository or stored publicly.

---

## Current Limitations

The current MVP does not yet include:

* Stellar wallet connection
* Soroban smart contract deployment
* On-chain proof storage
* Dynamic proof verification pages
* Database-backed proof registry

These features are planned for Phase 2.

---

## Phase 2 Direction

The next phase will focus on Stellar/Soroban testnet integration.

Planned Phase 2 features:

* Soroban proof registry contract
* Stellar testnet deployment
* Wallet connection
* On-chain proof creation
* On-chain proof retrieval
* Proof hash verification from contract data
* Contract usage documentation
