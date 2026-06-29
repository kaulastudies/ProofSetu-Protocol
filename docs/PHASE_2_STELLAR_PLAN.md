# Phase 2 Stellar/Soroban Testnet Plan

This document defines the Phase 2 plan and current progress for ProofSetu Protocol.

Phase 1 completed the Web MVP with local proof generation. Phase 2 adds Stellar/Soroban testnet integration so proof records can be anchored and verified on-chain.

---

## Current Phase

Phase 2 — Stellar/Soroban Testnet

Status: Contract build, local tests, testnet deployment, and testnet proof verification completed.

---

## Phase 2 Goal

The goal of Phase 2 is to move ProofSetu Protocol from local proof generation to Stellar/Soroban testnet-based proof anchoring.

Users should eventually be able to:

1. Create a proof record in the web app.
2. Generate a proof hash.
3. Connect a Stellar testnet wallet.
4. Write the proof hash to a Soroban proof registry contract.
5. Retrieve proof data from the contract.
6. Verify proof metadata publicly.

---

## Completed Phase 2 Work

Completed:

* Soroban proof registry contract scaffold added
* Proof record structure added
* create_proof function added
* get_proof function added
* verify_proof function added
* Stellar CLI installed in GitHub Codespaces
* wasm32v1-none Rust target confirmed
* Release overflow checks enabled in Cargo.toml
* Contract build validated successfully
* Cargo.lock committed
* target output ignored
* Local contract tests added
* Local tests passed
* Stellar testnet deployment notes added
* Proof registry contract deployed to Stellar testnet
* Testnet proof record created
* Testnet proof record retrieved
* Correct hash verification returned true
* Wrong hash verification returned false

---

## Contract Build Result

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

This confirms that the Soroban proof registry contract can create, retrieve, and verify workflow proof records on Stellar testnet.

---

## Current Contract Functions

### create_proof

Creates a new proof record on the contract.

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

Only proof hashes and minimal verification metadata should be stored.

---

## Remaining Phase 2 Work

Next tasks:

1. Update contracts/proof-registry/README.md with testnet deployment result.
2. Add frontend contract configuration.
3. Connect Web MVP to deployed Soroban proof registry contract.
4. Add on-chain proof status to the Create Proof page.
5. Add on-chain verification display to the verification page.
6. Add screenshots of the testnet proof flow.
7. Update demo walkthrough.
8. Prepare Phase 2 public demo release.

---

## Next Major Development Task

Connect the Web MVP to the deployed Soroban proof registry contract.

The Web MVP should eventually show:

* Local proof hash
* Stellar testnet contract ID
* On-chain proof creation status
* On-chain proof verification status
* Link or reference to testnet transaction
* Public verification result

---

## Phase 2 Success Criteria

Phase 2 is successful when:

* A proof hash can be created in the web app.
* A proof hash can be written to Stellar/Soroban testnet.
* A proof record can be retrieved from the contract.
* A proof hash can be verified publicly.
* Documentation explains the full flow.
* Screenshots and demo notes are available.

Current status:

* Contract build completed
* Local tests completed
* Testnet deployment completed
* Testnet invocation completed
* Web MVP integration pending

---

## Final Phase 2 Outcome

After full Phase 2 completion, ProofSetu Protocol should demonstrate:

Create proof → generate hash → anchor on Stellar testnet → retrieve proof → verify proof publicly through the Web MVP.

The contract side of this flow is already working on Stellar testnet. The next step is frontend integration.
