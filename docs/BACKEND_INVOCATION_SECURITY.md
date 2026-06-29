# Backend Invocation Security

This document defines the safety rules for backend-assisted Stellar testnet invocation in ProofSetu Protocol.

The next ProofSetu integration step is to move from API scaffold mode to secure backend-assisted Soroban contract invocation.

---

## Current Status

Completed:

* Soroban proof registry contract deployed to Stellar testnet
* Create Proof page connected to API scaffold
* API scaffold receives proof payload successfully
* Frontend displays API scaffold response

Current API route:

/api/create-onchain-proof

Current mode:

scaffold_only

---

## Next Goal

Move from scaffold-only API response to real backend-assisted Stellar testnet invocation.

Target flow:

Create Proof page → API route → Stellar testnet contract → transaction hash → frontend response

---

## Important Security Rule

Never commit private keys, secret keys, or seed phrases to GitHub.

Never paste private keys, secret keys, or seed phrases into:

* README files
* Documentation
* GitHub issues
* Screenshots
* Chat messages
* Source code
* Public logs

---

## Environment Variables

Any deployer secret key must be stored only as a private environment variable.

Possible Vercel environment variables:

STELLAR_NETWORK=testnet

STELLAR_CONTRACT_ID=CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ

STELLAR_DEPLOYER_SECRET_KEY=do_not_commit_this_value

---

## Public Values Safe to Display

These values are safe to display publicly:

* Stellar testnet contract ID
* Public testnet address
* Testnet transaction hash
* Wasm hash
* Proof ID
* Event hash
* Verification status

---

## Private Values Not Safe to Display

These values must never be displayed publicly:

* Secret key
* Private key
* Seed phrase
* Mainnet wallet secret
* API secrets
* Patient records
* Client documents
* Identity documents
* Financial documents

---

## Recommended Build Order

1. Keep current API scaffold working.
2. Add environment variable checklist.
3. Configure Vercel environment variables.
4. Add backend invocation code.
5. Test with one new proof ID.
6. Return transaction hash to frontend.
7. Display transaction result in Create Proof page.
8. Update screenshots and README.
9. Update open integration issue.

---

## Current Recommendation

Use backend-assisted invocation only for testnet demo.

Do not use mainnet.

Do not use production funds.

Do not add wallet signing until the backend demo flow is stable.
