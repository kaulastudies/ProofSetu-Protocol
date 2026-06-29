# Soroban Contract Design

This document defines the first planned Soroban proof registry contract for ProofSetu Protocol.

The goal is to keep the first contract simple, auditable, and focused only on proof anchoring and verification.

---

## Contract Name

Proof Registry Contract

---

## Purpose

The Proof Registry Contract will allow ProofSetu Protocol to anchor workflow proof records on Stellar/Soroban testnet.

The contract should store proof metadata and allow users to verify whether a proof hash was recorded.

Private documents must never be stored on-chain.

---

## Core Idea

The Web MVP already generates a local SHA-256 proof hash.

Phase 2 will add the ability to write that proof hash and basic metadata to a Soroban contract.

The intended flow is:

1. User creates proof in the web app.
2. App generates a proof hash.
3. User connects Stellar testnet wallet.
4. App writes proof metadata to the Soroban contract.
5. Public verification page retrieves proof data from the contract.
6. User can verify that the proof hash exists on Stellar testnet.

---

## Proof Record Fields

A proof record may contain:

* `proof_id`
* `proof_type`
* `event_hash`
* `creator`
* `reference_id`
* `timestamp`
* `status`

---

## Data Privacy Rule

Do not store private documents on-chain.

The contract should not store:

* Patient records
* Client files
* Invoices
* Contracts
* Personal data
* Financial documents
* API keys
* Wallet private keys
* Seed phrases

Only proof hashes and minimal verification metadata should be stored.

---

## Planned Contract Functions

### 1. create_proof

Creates a new proof record.

Expected inputs:

* proof ID
* proof type
* event hash
* reference ID
* timestamp

Expected behavior:

* Stores proof metadata
* Links proof to creator wallet/address
* Prevents duplicate proof IDs
* Returns success confirmation

---

### 2. get_proof

Retrieves a proof record by proof ID.

Expected input:

* proof ID

Expected output:

* proof ID
* proof type
* event hash
* creator
* reference ID
* timestamp
* status

---

### 3. verify_proof

Verifies whether a submitted hash matches the stored proof hash.

Expected inputs:

* proof ID
* event hash

Expected output:

* true if the hash matches
* false if the hash does not match

---

## Suggested Contract Data Structure

A proof record can be represented with these fields:

* `proof_id`: unique proof identifier
* `proof_type`: category of proof
* `event_hash`: hash generated from workflow metadata
* `creator`: wallet/address that created the proof
* `reference_id`: external workflow reference
* `timestamp`: creation timestamp
* `status`: proof status

---

## Example Proof Record

```json
{
  "proof_id": "PS-FREE-0001",
  "proof_type": "freelancer_milestone",
  "event_hash": "sample_hash_value",
  "creator": "stellar_testnet_wallet_address",
  "reference_id": "PROOFSETU-MVP-001",
  "timestamp": "2026-06-29T00:00:00Z",
  "status": "created"
}
```

---

## Error Handling

The contract should handle:

* Duplicate proof ID
* Missing proof record
* Hash mismatch
* Invalid proof data
* Unauthorized or malformed calls

---

## Contract Simplicity Principle

The first contract should not include complex payment, escrow, NFT, token, or identity features.

The first goal is only:

Create proof → store proof hash → retrieve proof → verify proof hash.

Payments, milestone settlement, stablecoin links, and escrow features can be added later after the proof registry is stable.

---

## Phase 2 Contract Milestones

### Milestone 1 — Contract Skeleton

* Create contract folder
* Add Rust/Soroban contract scaffold
* Define proof record structure
* Define contract function names

### Milestone 2 — Local Contract Logic

* Implement create proof logic
* Implement get proof logic
* Implement verify proof logic
* Add local tests

### Milestone 3 — Testnet Deployment

* Deploy contract to Stellar testnet
* Publish contract ID
* Add testnet transaction example
* Add deployment notes

### Milestone 4 — Web App Integration

* Connect Create Proof page to contract
* Add wallet connection
* Add on-chain proof status
* Add verification from contract data

---

## Success Criteria

The contract is successful when:

* A proof record can be created on Stellar testnet
* A proof record can be retrieved by proof ID
* A proof hash can be verified
* Duplicate proof IDs are rejected
* Documentation explains how to use the contract
* Web app can display on-chain verification status

---

## Future Extensions

Possible later features:

* Payment proof
* Invoice settlement proof
* Grant milestone proof
* Escrow proof
* Stablecoin payment reference
* Organization/team proof registry
* API access for external apps
* Dynamic verification pages
