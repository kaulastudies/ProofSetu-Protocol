# ProofSetu Protocol — Project Status

ProofSetu Protocol is an open-source verifiable workflow proof layer built on Stellar/Soroban.

The project has moved beyond a local Web MVP and now supports real backend-assisted Stellar testnet proof submission and dynamic on-chain verification.



## Current Status

Status: Stellar testnet MVP completed

Current milestone: Prepare `v0.3.0` release

ProofSetu currently supports:

* Local proof creation
* SHA-256 event hash generation
* Backend-assisted Stellar testnet submission
* Real Stellar transaction hash returned to frontend
* Dynamic proof verification using Proof ID and Event Hash
* Verified true/false result display
* Server-side secret key handling through environment variables



## Live Demo

* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify On-chain: https://proof-setu-protocol.vercel.app/verify
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample
* Testnet Contract: https://proof-setu-protocol.vercel.app/testnet
* Environment Check API: https://proof-setu-protocol.vercel.app/api/env-check
* On-chain Proof API: https://proof-setu-protocol.vercel.app/api/create-onchain-proof
* On-chain Verification API: https://proof-setu-protocol.vercel.app/api/verify-onchain-proof



## Completed Milestones

### Phase 1 — Web MVP

Completed:

* Repository setup
* Documentation setup
* MIT License
* Next.js web app
* Vercel deployment
* Homepage
* Create Proof page
* Local SHA-256 hash generation
* Generated proof record JSON output
* Public sample verification page
* Example proof records
* Initial screenshots
* `v0.1.0` release



### Phase 2 — Stellar/Soroban Testnet Deployment

Completed:

* Soroban proof registry contract scaffold
* Local contract tests
* Contract build
* Stellar testnet deployment
* Initial testnet invocation
* `create_proof` tested successfully
* `get_proof` tested successfully
* `verify_proof` tested with correct hash
* `verify_proof` tested with wrong hash
* Contract details documented
* `v0.2.0` release

Contract details:

* Network: Stellar testnet
* Contract ID: `CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ`
* Wasm hash: `743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166`
* Deployer public address: `GAT2L4GYPN2TST44AQA6QFVNWB4BUM7SXC73B4D5Y7PA4YRNHCLL`

Transactions:

* Deployment transaction: `5ee448eb186c966fe6965fa7282b94d78a96df4e596dd9d0f6326cf3d0f6261b`
* Initial create proof transaction: `8a7fd049fcaf57e0c438a1b521b08cd30afe762cd6b74c172c302faccd98f132`



### Phase 3 — Backend-Assisted Stellar Testnet MVP

Completed:

* Stellar testnet config added to frontend
* Testnet Contract page added
* API scaffold created
* Vercel environment variables configured
* Safe environment check API added
* Server-side Stellar config helper added
* Backend-assisted Stellar testnet proof submission added
* Create Proof page updated for Stellar testnet submission
* Real Stellar transaction hash returned to frontend
* Secret key kept server-side and not exposed
* Dynamic verification API added
* Verify On-chain page added
* Successful proof verification using Proof ID and Event Hash
* Wrong hash verification test returns false
* Verification screenshot added

Successful backend-assisted Stellar testnet transaction:

* Reference ID: `REAL-STELLAR-003`
* Verified Proof ID: `PS-1782748239799`
* Verified Event Hash: `775fbc34077813ca0cdd0941af51872c4eb0890bae5c58a8590f74f541347d9e`
* Verification result: `true`
* Secret key exposed: `false`



## Current Working Flow

1. User opens Create Proof page.
2. User enters workflow proof details.
3. Browser generates local SHA-256 event hash.
4. User submits proof to Stellar testnet.
5. Backend API signs and submits proof to deployed Soroban contract.
6. Stellar testnet returns transaction hash and SUCCESS status.
7. User opens Verify On-chain page.
8. User enters Proof ID and Event Hash.
9. Backend verification API checks the deployed Soroban contract.
10. Frontend displays verified true/false result.



## Security Status

Implemented:

* Secret key stored only in Vercel environment variables
* Secret key not committed to GitHub
* Secret key not exposed in frontend
* Secret key not exposed in API responses
* Environment check route returns only safe config status
* Public response shows `secretKeyExposed: false`

Safe public values:

* Contract ID
* Public testnet address
* Transaction hash
* Wasm hash
* Proof ID
* Event hash
* Verification status

Private values that must never be exposed:

* Secret key
* Private key
* Seed phrase
* Mainnet wallet secret
* API secrets
* Client documents
* Patient records
* Identity documents
* Financial documents



## Screenshots Added

Current screenshots include:

* Homepage
* Create Proof page
* Generated proof hash
* Sample verification page
* Stellar testnet contract page
* Create Proof page with Stellar config
* Create Proof on-chain placeholder
* Verify Sample page with Stellar section
* Create Proof API scaffold response
* Create Proof Stellar testnet success
* Verify On-chain proof success



## Next Milestone

Prepare `v0.3.0` release.

Tasks:

* Update README
* Update project status
* Update grant-readiness notes
* Update demo walkthrough
* Confirm all screenshots are visible in GitHub README
* Confirm Vercel pages are live
* Confirm APIs are safe
* Create `v0.3.0` GitHub release
* Prepare final grant-readiness summary
* Prepare demo video script



## v0.3.0 Release Goal

`v0.3.0` should represent the first complete Stellar testnet MVP.

Release summary:

ProofSetu Protocol can now create a workflow proof, generate a SHA-256 event hash, submit the proof to a deployed Soroban contract on Stellar testnet, return a real Stellar transaction hash, and verify the proof dynamically using Proof ID and Event Hash.



## Later Roadmap

* Public proof lookup by transaction hash
* Improved verification result styling
* Wallet-based user flow
* Database-backed proof history
* Organization dashboard
* File hash support
* Grant deliverable workflow template
* Invoice approval workflow template
* NGO transparency dashboard
* Hospital document submission workflow
* AI decision proof trail
* Mainnet readiness review

## Demo Video

ProofSetu Protocol v0.3.0 demo video: https://youtu.be/7EKzgLwDhE0

