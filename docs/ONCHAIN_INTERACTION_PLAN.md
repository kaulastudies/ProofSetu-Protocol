# On-Chain Interaction Plan

This document defines the next integration plan for connecting the ProofSetu Web MVP to the deployed Soroban proof registry contract on Stellar testnet.

---

## Current Status

ProofSetu Protocol has already completed:

* Web MVP
* Soroban proof registry contract
* Local contract build
* Local contract tests
* Stellar testnet deployment
* Testnet proof creation
* Testnet proof retrieval
* Correct hash verification
* Wrong hash verification
* Public Testnet Contract page
* Frontend display of Stellar testnet contract details

---

## Deployed Contract

Network:

Stellar testnet

Contract ID:

CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ

Sample proof ID:

PS-TESTNET-001

Sample event hash:

sample_testnet_hash_001

---

## Goal

The goal is to move from displaying testnet contract details to live on-chain interaction from the Web MVP.

The target flow is:

1. User fills the Create Proof form.
2. Web app generates a local proof hash.
3. User clicks an on-chain submission action.
4. Proof data is sent to Stellar testnet.
5. Soroban contract stores the proof record.
6. Verification page can display proof status.
7. Correct hash returns true.
8. Wrong hash returns false.

---

## Recommended MVP Approach

For the next MVP stage, use backend-assisted testnet invocation first.

This means:

Frontend → API route/backend → Stellar testnet contract → result returned to frontend

This is simpler and safer than adding wallet signing immediately.

---

## Why Backend-Assisted First

Backend-assisted interaction is recommended for the next MVP because:

* It is faster to build
* It avoids wallet complexity at this stage
* It keeps the demo flow simple
* It works well for testnet proof-of-concept
* It helps create a complete grant/demo walkthrough
* Wallet-based signing can be added later

---

## Future Wallet-Based Flow

Wallet-based signing can be added later.

Future flow:

Frontend → Wallet connection → User signs transaction → Stellar testnet contract → result shown in Web MVP

This is better for production, but it is more complex and should be added after the demo flow is stable.

---

## Planned Backend-Assisted Flow

### Step 1 — Frontend Proof Generation

The Create Proof page already generates:

* Proof ID
* Proof type
* Title
* Description
* Reference ID
* Creator wallet/reference
* Timestamp
* Event hash

---

### Step 2 — API Route

Add an API route that receives proof data from the frontend.

Planned route:

/api/create-onchain-proof

Expected input:

* proof_id
* proof_type
* event_hash
* creator
* reference_id
* timestamp

Expected output:

* success status
* transaction hash
* contract ID
* proof ID
* verification status

---

### Step 3 — Backend Contract Invocation

The backend should invoke the deployed Soroban contract function:

create_proof

Contract ID:

CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ

---

### Step 4 — Frontend Status Update

After backend response, the Create Proof page should show:

* Local proof generated
* On-chain submission started
* On-chain proof created
* Transaction hash
* Contract ID
* Verification link or reference

---

### Step 5 — Verification Page

The verification page should later support:

* Proof ID lookup
* Stored proof record display
* Correct hash verification
* Wrong hash rejection
* Contract ID display
* Transaction reference display

---

## Safety Rules

Do not expose:

* Secret keys
* Private keys
* Seed phrases
* Mainnet wallet credentials
* Patient records
* Client files
* Invoices
* Contracts
* Identity documents
* Private financial records
* Personal data

Only expose:

* Public contract ID
* Public transaction hash
* Public testnet address
* Proof ID
* Proof type
* Proof hash
* Verification status
* Minimal metadata

---

## Important Security Note

If backend-assisted invocation is used, any testnet secret key must be stored only in environment variables.

Never commit secret keys to GitHub.

Never paste secret keys into README files, documentation, issues, screenshots, or chat.

---

## Environment Variables Needed Later

Possible environment variables:

STELLAR_NETWORK=testnet

STELLAR_CONTRACT_ID=CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ

STELLAR_DEPLOYER_SECRET_KEY=do_not_commit_this_value

---

## Build Order

Recommended next build order:

1. Create API route plan.
2. Add frontend button placeholder for on-chain submission.
3. Add frontend status states.
4. Add backend-assisted contract invocation.
5. Test with one proof record.
6. Add transaction hash display.
7. Add verification lookup.
8. Update screenshots.
9. Update README.
10. Update release notes.

---

## Current Recommendation

Do not add wallet signing immediately.

First complete:

Create Proof page → backend/API route → Soroban testnet contract → transaction result → frontend status display

After this works, wallet signing can become the next milestone.

---

## Next Practical Task

Add an on-chain submission placeholder button to the Create Proof page.

The button should not invoke the contract yet.

It should clearly show the planned flow:

Local proof generated → Ready for Stellar testnet anchoring → On-chain submission coming next

This keeps the UI stable before live backend integration.
