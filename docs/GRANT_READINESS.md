# Grant Readiness

ProofSetu Protocol is an open-source verifiable workflow proof layer for documents, milestones, invoices, grant deliverables, donation usage, cross-border service work, and AI-assisted decisions.

The project has completed its Web MVP and now has a working Soroban proof registry contract deployed on Stellar testnet.

---

## Project Name

ProofSetu Protocol

---

## Short Description

ProofSetu Protocol helps teams create, store, and verify workflow proof records without exposing private documents on-chain.

Private files stay off-chain. Only hashes, timestamps, proof metadata, and verification references are used.

---

## Current Status

Status: Phase 2 Stellar/Soroban testnet deployment completed.

Completed:

* Web MVP deployed
* Create Proof page added
* Local SHA-256 hash generation added
* Public sample verification page added
* Screenshots added
* Documentation added
* Soroban proof registry contract built
* Local contract tests passed
* Contract deployed to Stellar testnet
* Testnet proof record created
* Testnet proof record retrieved
* Correct hash verification returned true
* Wrong hash verification returned false

---

## Live Demo

Homepage:

https://proof-setu-protocol.vercel.app/

Create Proof:

https://proof-setu-protocol.vercel.app/create

Verify Sample:

https://proof-setu-protocol.vercel.app/proof/sample

---

## Stellar Testnet Contract

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

## Testnet Verification Result

The deployed Soroban contract was invoked successfully on Stellar testnet.

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

This confirms that ProofSetu Protocol can create, retrieve, and verify workflow proof records on Stellar testnet.

---

## Why ProofSetu Fits Stellar/Soroban

ProofSetu Protocol fits Stellar/Soroban because it connects real-world workflow events with verifiable, low-cost, public proof infrastructure.

The project can support:

* Grant deliverable proof
* Freelancer milestone proof
* Invoice approval proof
* Donation usage proof
* Cross-border service proof
* AI-assisted decision trail proof
* Future payment and settlement proof

Stellar/Soroban can provide the on-chain registry layer for timestamped proof references while sensitive documents remain off-chain.

---

## Problem Being Solved

Many real-world workflows depend on proof scattered across:

* Emails
* PDFs
* Screenshots
* WhatsApp messages
* Spreadsheets
* Internal tools
* Client/vendor communication

This creates problems such as:

* Disputes over whether work was completed
* Delayed milestone approvals
* Weak audit trails
* Poor grant reporting
* Poor donation transparency
* Difficulty proving document submission
* Privacy risk if sensitive files are exposed

ProofSetu solves this by creating verifiable proof records that can be checked without exposing private documents.

---

## ProofSetu Solution

ProofSetu creates a proof record for a workflow event.

The proof flow is:

1. User creates workflow proof metadata.
2. The system generates a proof hash.
3. The proof hash and metadata can be anchored on Stellar/Soroban.
4. Public verification can confirm whether the proof record exists and matches.
5. Private files remain off-chain.

---

## Current MVP Flow

The current Web MVP supports:

* Landing page
* Create Proof page
* Proof type selection
* Event details form
* Local SHA-256 hash generation
* Generated proof record preview
* JSON proof output
* Public sample verification page

The current Soroban contract supports:

* create_proof
* get_proof
* verify_proof

---

## Privacy Design

ProofSetu does not store private documents on-chain.

Do not store:

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

Only store:

* Proof hashes
* Proof IDs
* Proof types
* Reference IDs
* Creator references
* Timestamps
* Verification status

---

## Use Cases

ProofSetu Protocol can be used for:

1. Freelancer milestone proof
2. Grant deliverable proof
3. NGO donation usage proof
4. Invoice approval proof
5. Hospital document submission proof
6. AI decision summary proof
7. Cross-border service delivery proof
8. Future payment and settlement proof

---

## Completed Milestones

### Phase 1 — Web MVP

Completed:

* Public GitHub repository
* MIT License
* Documentation
* Live Vercel demo
* Landing page
* Create Proof page
* Local hash generation
* Public sample verification page
* Screenshots
* v0.1.0 release

### Phase 2 — Soroban Testnet

Completed:

* Soroban contract scaffold
* Contract build validation
* Local tests
* Stellar testnet deployment
* On-chain proof creation
* On-chain proof retrieval
* Correct hash verification
* Wrong hash rejection

---

## Remaining Work

Next planned tasks:

* Update Web MVP with deployed contract configuration
* Add wallet/testnet connection planning
* Add on-chain status to Create Proof page
* Add on-chain lookup to verification page
* Add screenshots of testnet proof flow
* Update demo walkthrough
* Prepare Phase 2 public demo release
* Collect ecosystem feedback

---

## Suggested Grant Direction

ProofSetu Protocol can request grant support for the next stage:

Goal:

Connect the Web MVP to the deployed Soroban proof registry contract and prepare a complete public demo of verifiable workflow proof on Stellar testnet.

Suggested funding use:

* Frontend contract integration
* Wallet/testnet connection flow
* On-chain proof creation UI
* On-chain verification UI
* Documentation
* Screenshots and demo walkthrough
* Testing and polish
* Community feedback and iteration

Suggested grant ask:

USD 25,000 to USD 35,000 equivalent in XLM, depending on milestone scope.

Recommended starting ask:

USD 30,000 equivalent in XLM.

---

## Grant Readiness Status

ProofSetu Protocol is now stronger than an idea-stage project.

Current strengths:

* Working Web MVP
* Public repository
* Live demo
* Documentation
* Screenshots
* Soroban contract built
* Local tests passed
* Stellar testnet deployment completed
* On-chain proof creation and verification tested

Remaining before a stronger application:

* Connect frontend to deployed contract
* Add on-chain verification screenshots
* Add demo video or walkthrough GIF
* Update README and demo documents after frontend integration
* Prepare concise grant pitch and milestone budget

---

## Summary

ProofSetu Protocol has moved from Web MVP to working Stellar/Soroban testnet proof infrastructure.

The project now demonstrates:

Create proof → generate hash → store proof on Stellar testnet → retrieve proof → verify correct hash → reject wrong hash.

This makes ProofSetu a credible early-stage open-source project for Stellar/Soroban ecosystem feedback and future grant application.
