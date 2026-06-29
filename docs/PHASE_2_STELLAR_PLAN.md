# Phase 2 Stellar/Soroban Testnet Plan

This document defines the Phase 2 plan for ProofSetu Protocol.

Phase 1 completed the Web MVP with local proof generation. Phase 2 will add Stellar/Soroban testnet integration so proof records can be anchored and verified on-chain.

---

## Phase 2 Goal

The goal of Phase 2 is to move ProofSetu Protocol from local proof generation to Stellar/Soroban testnet-based proof anchoring.

Users should be able to:

1. Create a proof record in the web app.
2. Generate a proof hash.
3. Connect a Stellar testnet wallet.
4. Write the proof hash to a Soroban proof registry contract.
5. Retrieve proof data from the contract.
6. Verify proof metadata publicly.

---

## Current Phase 1 Status

Completed:

* Landing page
* Create Proof page
* Local SHA-256 proof hash generation
* Generated proof record preview
* JSON proof output
* Public sample verification page
* Vercel deployment
* Documentation
* Screenshots
* v0.1.0 release

---

## Phase 2 Deliverables

### 1. Soroban Proof Registry Contract

Build a simple Soroban smart contract for proof records.

Planned functions:

* `create_proof`
* `get_proof`
* `verify_proof`

The contract should remain small, auditable, and easy to test.

---

### 2. Proof Data Model

A proof record should include:

* Proof ID
* Proof type
* Event hash
* Creator wallet
* Timestamp
* Reference ID
* Network
* Status

Private documents should never be stored on-chain.

---

### 3. Stellar Testnet Deployment

Deploy the proof registry contract on Stellar testnet.

Publish:

* Contract ID
* Deployment notes
* Example testnet transaction
* Contract usage instructions

---

### 4. Web App Integration

Update the Web MVP to support:

* Wallet connection
* On-chain proof creation
* On-chain proof retrieval
* On-chain proof verification
* UI status showing local proof vs testnet proof

---

### 5. Documentation

Add or update:

* Contract README
* Testnet deployment guide
* Updated architecture document
* Updated demo walkthrough
* Updated grant readiness document
* Screenshots of testnet proof flow

---

## Phase 2 Milestones

### Milestone 1 — Contract Draft

Deliverables:

* Basic proof registry contract
* Contract data model
* Local contract tests
* Contract documentation

---

### Milestone 2 — Testnet Deployment

Deliverables:

* Contract deployed on Stellar testnet
* Contract ID published
* Sample proof creation transaction
* Testnet deployment guide

---

### Milestone 3 — Web App Integration

Deliverables:

* Wallet connection added
* Create Proof page writes hash to testnet
* Verification page retrieves proof data
* UI displays on-chain verification status

---

### Milestone 4 — Phase 2 Demo

Deliverables:

* Live updated demo
* Screenshots
* Walkthrough notes
* Updated README
* Updated grant readiness summary

---

## Privacy Rules

ProofSetu Protocol must not store private files on-chain.

Do not store:

* Patient records
* Client documents
* Invoices
* Contracts
* Identity documents
* Financial records
* Personal data
* API keys
* Wallet private keys
* Seed phrases

Only proof hashes and verification metadata should be stored.

---

## Phase 2 Success Criteria

Phase 2 is successful when:

* A proof hash can be created in the web app.
* A proof hash can be written to Stellar/Soroban testnet.
* A proof record can be retrieved from the contract.
* A proof hash can be verified publicly.
* Documentation explains the full flow.
* Screenshots and demo notes are available.

---

## Final Phase 2 Outcome

After Phase 2, ProofSetu Protocol should demonstrate:

Create proof → generate hash → anchor on Stellar testnet → verify proof publicly.

This will make the project stronger for grant applications, ecosystem feedback, and future funding discussions.
