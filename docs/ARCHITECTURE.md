# Architecture

ProofSetu Protocol is designed as a simple, open-source workflow proof system built in stages.

The first stage focuses on a web MVP. The second stage adds Stellar/Soroban testnet integration. The final stage prepares the system for public launch and mainnet readiness.

## High-Level Architecture

ProofSetu Protocol has three main layers:

1. Web Application Layer
2. Proof Generation and Verification Layer
3. Stellar/Soroban Proof Registry Layer

---

## 1. Web Application Layer

The web application allows users to create and verify proof records.

Planned features:

* Landing page
* Proof creation form
* Proof verification page
* Use-case examples
* Public proof display
* Basic dashboard

The first version will be built as a simple web app before adding blockchain complexity.

---

## 2. Proof Generation and Verification Layer

This layer converts workflow event data into a tamper-evident proof hash.

A proof record may include:

* Proof ID
* Proof type
* Event title
* Description
* Reference ID
* Document or event hash
* Creator wallet
* Timestamp
* Network reference
* Verification status

Private documents are not stored on-chain.

Only proof metadata, timestamps, and hashes are used for verification.

---

## 3. Stellar/Soroban Proof Registry Layer

In the Stellar/Soroban integration stage, ProofSetu will use a simple Soroban smart contract to store and verify proof records.

Planned contract functions:

* create_proof
* get_proof
* verify_proof

The contract will allow users to prove that a specific workflow event or document hash existed at a specific time.

---

## Privacy Design

ProofSetu does not store private documents on-chain.

Instead, it stores:

* Hashes
* Timestamps
* Proof IDs
* Proof types
* Public verification metadata

This allows public verification without exposing sensitive files or private business data.

---

## Example Workflow

1. User creates a proof record.
2. ProofSetu generates a hash from event/document data.
3. The proof is saved in the web app.
4. A public verification page is created.
5. In the Stellar phase, the proof hash is anchored on Stellar/Soroban testnet.
6. Anyone can verify the proof using the proof ID or hash.

---

## Future Extensions

Possible future extensions include:

* Stellar wallet connection
* Stablecoin payment proof
* Invoice approval proof
* Milestone release proof
* Grant deliverable proof
* NGO transparency proof
* AI decision accountability proof
* API access for other applications
