# Proof Registry Contract

This folder contains the planned Soroban proof registry contract for ProofSetu Protocol.

The contract is designed to store and verify workflow proof records on Stellar/Soroban testnet.

## Current Status

Initial contract scaffold added.

## Planned Contract Functions

- `create_proof`
- `get_proof`
- `verify_proof`

## Proof Record Fields

A proof record includes:

- Proof type
- Event hash
- Creator wallet/reference
- Reference ID
- Timestamp
- Status

## Privacy Note

Private documents are not stored on-chain.

Only hashes, timestamps, and proof metadata are stored for verification.

## Phase 2 Goal

The next goal is to build, test, and deploy this contract to Stellar testnet using the Stellar CLI.
