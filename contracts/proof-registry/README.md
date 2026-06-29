# Proof Registry Contract

This folder contains the Soroban proof registry contract for ProofSetu Protocol.

The contract stores and verifies workflow proof records on Stellar/Soroban.

Private documents are never stored on-chain. Only proof hashes and minimal verification metadata are stored.

---

## Current Status

Status: Built, tested locally, deployed to Stellar testnet, and invoked successfully.

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
* Contract deployed to Stellar testnet
* Testnet proof record created
* Testnet proof record retrieved
* Correct hash verification returned true
* Wrong hash verification returned false

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

Returns:

* true if the hash matches
* false if the hash does not match

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

## Local Test Result

Local tests passed.

Result:

* 3 passed
* 0 failed
* 0 ignored

Test coverage:

* Create proof record
* Retrieve proof record
* Verify matching proof hash
* Reject mismatched proof hash
* Reject duplicate proof ID

---

## Stellar Testnet Deployment

Network:

Stellar testnet

Contract ID:

CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ

Deployment transaction:

5ee448eb186c966fe6965fa7282b94d78a96df4e596dd9d0f6326cf3d0f6261b

Create proof transaction:

8a7fd049fcaf57e0c438a1b521b08cd30afe762cd6b74c172c302faccd98f132

Wasm hash:

743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166

Deployer public address:

GAT2L4GYPN2TST44AQA6QFVNWB4BUM7SXC73B4D5Y7PA4YRNHCLL

Sample proof ID:

PS-TESTNET-001

Correct hash:

sample_testnet_hash_001

---

## Testnet Invocation Result

The deployed contract was tested successfully on Stellar testnet.

Function results:

* create_proof returned true
* get_proof returned the stored proof record
* verify_proof with correct hash returned true
* verify_proof with wrong hash returned false

Stored proof record:

{
"creator": "proofsetu_testnet_deployer",
"event_hash": "sample_testnet_hash_001",
"proof_type": "freelancer_milestone",
"reference_id": "PROOFSETU-TESTNET-001",
"status": "created",
"timestamp": "2026-06-29T00:00:00Z"
}

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

## Next Task

The contract side is working on Stellar testnet.

Next major task:

Connect the ProofSetu Web MVP to the deployed Soroban proof registry contract.

The Web MVP should eventually show:

* Local proof hash
* Stellar testnet contract ID
* On-chain proof creation status
* On-chain proof verification status
* Public proof lookup result
