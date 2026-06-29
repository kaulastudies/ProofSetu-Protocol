# ProofSetu Protocol — v0.3.0 Release Checkpoint

This document freezes the current working state of ProofSetu Protocol before the `v0.3.0` release.

It exists so future development can continue without losing track of the deployed contract, public keys, proof samples, screenshots, API routes, and completed milestones.

---

## Release Target

Target release:

`v0.3.0`

Release title:

`Stellar Testnet MVP with Dynamic Proof Verification`

Release status:

Ready for final release preparation.

---

## Current Working Summary

ProofSetu Protocol now supports the complete Stellar testnet proof flow:

Create proof → generate SHA-256 event hash → submit proof to Stellar testnet → return transaction hash → verify proof dynamically using Proof ID and Event Hash.

---

## Live Demo URLs

* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify On-chain: https://proof-setu-protocol.vercel.app/verify
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample
* Testnet Contract: https://proof-setu-protocol.vercel.app/testnet
* Environment Check API: https://proof-setu-protocol.vercel.app/api/env-check
* On-chain Proof API: https://proof-setu-protocol.vercel.app/api/create-onchain-proof
* On-chain Verification API: https://proof-setu-protocol.vercel.app/api/verify-onchain-proof

---

## Stellar Testnet Contract

Network:

`testnet`

Contract ID:

`CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ`

Wasm hash:

`743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166`

Deployer public address:

`GAT2L4GYPN2TST44AQA6QFVNWB4BUM7SXC73B4D5Y7PA4YRNHCLL`

Deployment transaction:

`5ee448eb186c966fe6965fa7282b94d78a96df4e596dd9d0f6326cf3d0f6261b`

Initial create proof transaction:

`8a7fd049fcaf57e0c438a1b521b08cd30afe762cd6b74c172c302faccd98f132`

---

## Backend API Caller

API caller public key:

`GAMGK3T43OWXD6JRIH5PS34JUYXC2AJLU74I7TLHDNLHGP7GJNXCE3EL`

Secret key status:

Configured only in Vercel environment variables.

Secret key exposed:

`false`

Important:

Never commit or paste the API caller secret key into GitHub, README files, documentation, screenshots, issues, chats, or logs.

---

## Vercel Environment Variables

Required Vercel environment variables:

* `STELLAR_NETWORK`
* `STELLAR_CONTRACT_ID`
* `STELLAR_API_CALLER_PUBLIC_KEY`
* `STELLAR_API_CALLER_SECRET_KEY`

Current safe API check:

https://proof-setu-protocol.vercel.app/api/env-check

Expected result:

* `apiCallerSecretKeyConfigured: true`
* `secretKeyExposed: false`

---

## Verified Sample Proof

This is the current successful dynamic verification sample.

Proof ID:

`PS-1782748239799`

Event Hash:

`775fbc34077813ca0cdd0941af51872c4eb0890bae5c58a8590f74f541347d9e`

Verification result:

`true`

Secret key exposed:

`false`

This sample is used in the Verify On-chain page as the successful testnet sample.

---

## Completed Features

Completed before `v0.3.0`:

* Public GitHub repository
* MIT License
* Web MVP live on Vercel
* Homepage
* Create Proof page
* Local SHA-256 event hash generation
* Generated proof record JSON output
* Public sample verification page
* Stellar testnet contract information page
* Soroban proof registry contract
* Local Soroban contract tests
* Stellar testnet contract deployment
* Backend-assisted Stellar proof submission
* Real Stellar transaction hash returned to frontend
* Dynamic on-chain verification API
* Verify On-chain frontend page
* Successful proof verification using Proof ID and Event Hash
* Wrong hash verification returning false
* Safe environment variable check API
* Secret key stored server-side only
* README screenshots
* Project status update
* Grant readiness update
* Demo walkthrough update

---

## Screenshots Added

Current screenshots:

* `screenshots/homepage.png`
* `screenshots/create-proof-form.png`
* `screenshots/generated-proof-hash.png`
* `screenshots/verify-sample-proof.png`
* `screenshots/testnet-contract.png`
* `screenshots/create-proof-stellar-config.png`
* `screenshots/create-proof-onchain-placeholder.png`
* `screenshots/verify-sample-stellar-section.png`
* `screenshots/create-proof-api-scaffold-response.png`
* `screenshots/create-proof-stellar-testnet-success.png`
* `screenshots/verify-onchain-proof-success.png`

---

## Known Important Fix

A previous testnet transaction succeeded but used the wrong argument order in the server helper.

The helper was corrected so `create_proof` now uses the correct contract argument order:

`proof_id, proof_type, event_hash, creator, reference_id, timestamp`

The verified sample proof listed above was created after this correction.

---

## Grant Ask

Current suggested grant ask:

`$30,000`

Budget split:

* Milestone 1 — Public Testnet MVP Polish: `$7,500`
* Milestone 2 — Proof History and Workflow Templates: `$8,000`
* Milestone 3 — Wallet and Organization Flow: `$8,000`
* Milestone 4 — Mainnet Readiness Review: `$6,500`

Total:

`$30,000`

---

## Do Not Change Before v0.3.0

Do not change these before the release:

* Contract ID
* API caller public key
* Verified sample proof ID
* Verified sample event hash
* Screenshot filenames
* Main live URLs
* Vercel environment variable names

Changing these before release may break documentation consistency.

---

## If Key Rotation Is Needed Later

Only rotate the API caller key if the secret key is exposed or compromised.

If rotating:

1. Generate a new Stellar testnet API caller key.
2. Fund it on testnet.
3. Update Vercel environment variables.
4. Redeploy Vercel.
5. Confirm `/api/env-check`.
6. Confirm proof submission.
7. Confirm verification.
8. Update this checkpoint document.

Do not expose the old or new secret key.

---

## Next After v0.3.0

Recommended `v0.4.0` work:

* Proof history storage
* Public proof lookup
* Better verification result UI
* Wallet-based proof ownership
* Organization dashboard
* Workflow templates
* Mainnet readiness planning
