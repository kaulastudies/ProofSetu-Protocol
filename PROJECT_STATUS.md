# Project Status

ProofSetu Protocol is an open-source verifiable workflow proof layer for documents, milestones, invoices, grant deliverables, donation usage, cross-border service work, and AI-assisted decisions.

The project started as a Web MVP and has now moved into Stellar/Soroban testnet deployment.

---

## Current Stage

## Latest Release

**v0.2.0 — Stellar Testnet Deployment**

ProofSetu Protocol v0.2.0 marks the first Stellar/Soroban testnet deployment release.

This release includes:

* Soroban proof registry contract
* Contract build validation
* Local contract tests
* Stellar testnet deployment
* Testnet proof creation
* Testnet proof retrieval
* Correct hash verification
* Wrong hash rejection
* Public Testnet Contract page
* Updated documentation and screenshots

Live Testnet Contract page:

https://proof-setu-protocol.vercel.app/testnet

Contract ID:

CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ


**Phase 2 — Stellar/Soroban Testnet**

Status: Soroban proof registry contract deployed and tested on Stellar testnet.

---

## Phase 1 — Web MVP Status

Status: Completed.

Completed:

* Repository created
* MIT License added
* README added
* Documentation added
* Grant readiness document added
* Demo walkthrough added
* Screenshots added
* Vercel deployment completed
* Landing page built
* Create Proof page built
* Local SHA-256 proof hash generation added
* Generated proof record preview added
* JSON proof output added
* Public sample verification page added
* GitHub release v0.1.0 created

Live demo:

* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample

---

## Phase 2 — Stellar/Soroban Status

Status: Contract build, local tests, testnet deployment, and testnet invocation completed.

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

Local contract tests passed.

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

## Remaining Phase 2 Work

Next tasks:

* Update docs/GRANT_READINESS.md with testnet deployment result
* Update docs/PHASE_2_STELLAR_PLAN.md with completed deployment status
* Update contracts/proof-registry/README.md with testnet deployment result
* Connect Web MVP to deployed Soroban proof registry contract
* Add frontend contract configuration
* Add on-chain proof status to Create Proof page
* Add on-chain verification display to verification page
* Add screenshots of testnet proof flow
* Prepare updated demo walkthrough

---

## Long-Term Goal

ProofSetu Protocol aims to become an open-source verifiable workflow proof layer for:

* Document proof
* Milestone proof
* Invoice proof
* Grant deliverable proof
* Donation usage proof
* Cross-border service proof
* AI-assisted decision proof
* Future Stellar-based payment and settlement proof

Private documents stay off-chain. Only hashes, timestamps, proof metadata, and verification references are used for transparent verification.
