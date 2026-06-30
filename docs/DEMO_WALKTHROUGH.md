# ProofSetu Protocol — Demo Walkthrough

ProofSetu Protocol is an open-source verifiable workflow proof layer built on Stellar/Soroban.

This demo shows how a real-world workflow event can be converted into a verifiable proof record, submitted to Stellar testnet, and verified dynamically using Proof ID and Event Hash.

---

## Demo Links

* Homepage: https://proof-setu-protocol.vercel.app/
* Create Proof: https://proof-setu-protocol.vercel.app/create
* Verify On-chain: https://proof-setu-protocol.vercel.app/verify
* Verify Sample: https://proof-setu-protocol.vercel.app/proof/sample
* Testnet Contract: https://proof-setu-protocol.vercel.app/testnet
* Environment Check API: https://proof-setu-protocol.vercel.app/api/env-check
* On-chain Proof API: https://proof-setu-protocol.vercel.app/api/create-onchain-proof
* On-chain Verification API: https://proof-setu-protocol.vercel.app/api/verify-onchain-proof

---

## Demo Goal

The goal of the demo is to prove that ProofSetu can:

1. Create a workflow proof record.
2. Generate a SHA-256 event hash.
3. Submit the proof to a deployed Soroban contract on Stellar testnet.
4. Return a real Stellar transaction hash.
5. Verify the proof dynamically using Proof ID and Event Hash.
6. Show verified true/false result publicly.
7. Keep secret keys server-side and not exposed.

---

## Demo Flow Summary

Create Proof page:

User enters workflow details and generates a local proof hash.

Backend API:

The proof payload is sent to `/api/create-onchain-proof`.

Stellar/Soroban:

The backend submits the proof to the deployed Soroban proof registry contract on Stellar testnet.

Verify On-chain page:

User enters Proof ID and Event Hash.

Verification API:

The backend checks the deployed contract and returns verified true/false.

---

## Step 1 — Open the Homepage

URL:

https://proof-setu-protocol.vercel.app/

The homepage introduces ProofSetu Protocol as a verifiable workflow proof layer for real-world events such as:

* Freelancer milestone proof
* NGO donation usage proof
* Startup grant deliverable proof
* Invoice approval proof
* Hospital document submission proof
* AI-assisted decision proof

Screenshot:

`screenshots/homepage.png`

---

## Step 2 — Open Create Proof Page

URL:

https://proof-setu-protocol.vercel.app/create

The Create Proof page allows the user to enter workflow event details.

Example test values:

* Proof Type: Freelancer Milestone
* Title: Real Stellar Test 3
* Description: Corrected argument order verification test
* Reference ID: REAL-STELLAR-003
* Creator Wallet: leave blank for sample testnet creator reference

The page generates:

* Proof ID
* Proof type
* Event hash
* Creator reference
* Reference ID
* Timestamp
* Local proof JSON output

Screenshots:

`screenshots/create-proof-form.png`

`screenshots/generated-proof-hash.png`

---

## Step 3 — Submit Proof to Stellar Testnet

After generating the proof hash, the user clicks:

Submit Proof to Stellar Testnet

The frontend sends the proof payload to:

`/api/create-onchain-proof`

The backend signs and submits the proof to the deployed Soroban contract on Stellar testnet.

Expected successful response includes:

* `success: true`
* `mode: stellar_testnet_invocation`
* `transactionHash`
* `stellarStatus: SUCCESS`
* `secretKeyExposed: false`

Screenshot:

`screenshots/create-proof-stellar-testnet-success.png`

---

## Step 4 — Confirm Contract Details

The deployed contract is visible on the Testnet Contract page.

URL:

https://proof-setu-protocol.vercel.app/testnet

Contract details:

* Network: Stellar testnet
* Contract ID: `CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ`
* Wasm hash: `743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166`
* Deployer public address: `GAT2L4GYPN2TST44AQA6QFVNWB4BUM7SXC73B4D5Y7PA4YRNHCLL`

Screenshot:

`screenshots/testnet-contract.png`

---

## Step 5 — Open Verify On-chain Page

URL:

https://proof-setu-protocol.vercel.app/verify

The Verify On-chain page allows anyone to enter:

* Proof ID
* Event Hash

The page sends these values to:

`/api/verify-onchain-proof`

The backend checks the deployed Soroban contract and returns whether the submitted event hash matches the stored proof record.

---

## Step 6 — Verify Successful Proof

Verified sample:

* Proof ID: `PS-1782748239799`
* Event Hash: `775fbc34077813ca0cdd0941af51872c4eb0890bae5c58a8590f74f541347d9e`

Expected successful result:

* `success: true`
* `mode: stellar_testnet_verification`
* `verified: true`
* `secretKeyExposed: false`

Frontend result:

Verified

Proof hash matched

Screenshot:

`screenshots/verify-onchain-proof-success.png`

---

## Step 7 — Test Wrong Hash Verification

The Verify On-chain page also supports a negative test.

User can load the wrong hash sample and verify.

Expected result:

* `verified: false`
* `secretKeyExposed: false`

This proves the verification logic does not simply return true for any value. The event hash must match the stored on-chain proof record.

---

## Step 8 — Check Environment Safety

URL:

https://proof-setu-protocol.vercel.app/api/env-check

Expected safe response includes:

* Network
* Contract ID
* API caller public key
* Secret key configured status
* `secretKeyExposed: false`

The secret key is never returned in the API response.

---

## Step 9 — Check API Readiness

On-chain Proof API:

https://proof-setu-protocol.vercel.app/api/create-onchain-proof

On-chain Verification API:

https://proof-setu-protocol.vercel.app/api/verify-onchain-proof

These routes show that the backend APIs are live and connected to server-side Stellar configuration.

---

## Security Notes for Demo

ProofSetu follows strict secret-handling rules.

Secret keys are:

* Stored only in Vercel environment variables
* Not committed to GitHub
* Not exposed in frontend code
* Not exposed in API responses
* Not included in README files
* Not included in screenshots
* Not pasted into public issues

Safe public demo values include:

* Contract ID
* Public testnet address
* Transaction hash
* Wasm hash
* Proof ID
* Event hash
* Verification result

---

## Demo Reviewer Summary

A reviewer can validate the project by checking:

1. The live web app is deployed.
2. The Create Proof page generates proof records.
3. The backend submits proofs to Stellar testnet.
4. The frontend displays a real transaction hash.
5. The Verify On-chain page verifies Proof ID and Event Hash.
6. Correct hash returns true.
7. Wrong hash returns false.
8. Secret key is not exposed.
9. README and screenshots document the full flow.

---

## Current Demo Status

The current demo is ready for `v0.3.0` release preparation.

ProofSetu now demonstrates a complete Stellar testnet MVP:

Create proof → generate event hash → submit to Stellar testnet → return transaction hash → verify proof dynamically.

## Demo Video

ProofSetu Protocol v0.3.0 demo video: https://youtu.be/7EKzgLwDhE0

