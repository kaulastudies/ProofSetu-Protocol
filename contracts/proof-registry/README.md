# Proof Registry Contract

This folder contains the Soroban proof registry contract for ProofSetu Protocol.

The contract stores and verifies workflow proof records on Stellar/Soroban.

Private documents are never stored on-chain. Only proof hashes and minimal verification metadata are stored.

---

## Current Status

Status: Contract scaffold built and tested locally.

Completed:

* Contract scaffold added
* Proof record structure added
* create_proof function added
* get_proof function added
* verify_proof function added
* Release overflow checks enabled
* Contract build validated with Stellar CLI
* Local contract tests added
* Local tests passed

---

## Build Result

Validated in GitHub Codespaces.

* Stellar CLI version: 27.0.0
* Wasm file: target/wasm32v1-none/release/proof_registry.wasm
* Wasm hash: 743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166
* Wasm size: 3928 bytes optimized
* Exported functions:

  * create_proof
  * get_proof
  * verify_proof

---

## Test Result

Local tests passed.

Result:

* 3 passed
* 0 failed
* 0 ignored

Test coverage currently includes:

* Create proof record
* Retrieve proof record
* Verify matching proof hash
* Reject mismatched proof hash
* Reject duplicate proof ID

---

## Contract Functions

### create_proof

Creates a new proof record.

Inputs:

* Proof ID
* Proof type
* Event hash
* Creator
* Reference ID
* Timestamp

Behavior:

* Stores proof metadata
* Prevents duplicate proof IDs
* Sets proof status as created

### get_proof

Retrieves a proof record by proof ID.

### verify_proof

Verifies whether a submitted event hash matches the stored proof hash.

Returns true if the hash matches and false if the hash does not match.

---

## Privacy Rule

Do not store private documents on-chain.

Only store:

* Proof hashes
* Proof IDs
* Proof types
* Reference IDs
* Creator references
* Timestamps
* Verification status

Never store:

* Patient records
* Client files
* Invoices
* Contracts
* Identity documents
* Financial records
* Personal data
* API keys
* Wallet private keys
* Seed phrases

---

## Local Build Command

From this folder, run:

stellar contract build

---

## Local Test Command

From this folder, run:

cargo test

---

## Next Phase 2 Tasks

Next planned tasks:

1. Prepare Stellar testnet deployment notes.
2. Create testnet identity.
3. Deploy proof registry contract to Stellar testnet.
4. Publish contract ID.
5. Add sample testnet transaction.
6. Connect Web MVP to contract data.
