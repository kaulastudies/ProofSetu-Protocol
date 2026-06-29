# Proof Registry Contract

This folder will contain the future Soroban smart contract for ProofSetu Protocol.

The contract will be responsible for storing and verifying proof records on Stellar/Soroban testnet.

## Planned Contract Functions

* `create_proof`
* `get_proof`
* `verify_proof`

## Planned Proof Data

A proof record may include:

* Proof ID
* Proof type
* Event hash
* Creator wallet
* Timestamp
* Network reference
* Verification status

## Privacy Note

Private documents will not be stored on-chain.

Only hashes, timestamps, and proof metadata will be stored for verification.
