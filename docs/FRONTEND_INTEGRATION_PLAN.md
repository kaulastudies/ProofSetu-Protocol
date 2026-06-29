# Frontend Integration Plan

This document defines the frontend integration plan for connecting the ProofSetu Web MVP to the deployed Soroban proof registry contract on Stellar testnet.

---

## Current Status

The Web MVP already displays Stellar testnet contract information.

Completed:

* Stellar testnet contract configuration added
* Testnet Contract page added
* Homepage navigation updated
* Create Proof page shows Stellar contract configuration
* Verify Sample page shows Stellar testnet verification section
* README screenshots updated
* Frontend integration issue updated

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

## Integration Goal

The goal is to move from static testnet contract display to live frontend-based contract interaction.

The Web MVP should eventually allow users to:

1. Create proof metadata.
2. Generate a local proof hash.
3. Prepare an on-chain proof record.
4. Connect or use a Stellar testnet account.
5. Submit proof data to the deployed Soroban contract.
6. Retrieve proof records from the contract.
7. Verify proof hashes from the frontend.

---

## Planned Frontend Features

### 1. Contract Configuration

Status: Completed.

The Web MVP already stores deployed contract details in:

apps/web/lib/stellar-testnet.ts

---

### 2. Testnet Contract Page

Status: Completed.

The page displays:

* Network
* Contract ID
* Deployment transaction
* Create proof transaction
* Wasm hash
* Sample proof ID
* Sample event hash
* Verified testnet flow

Page:

https://proof-setu-protocol.vercel.app/testnet

---

### 3. Create Proof Page Integration

Current status:

The Create Proof page shows the deployed Stellar testnet contract configuration.

Next planned step:

Add a clear UI state for:

* Local proof generated
* Ready for Stellar testnet anchoring
* On-chain submission pending
* On-chain proof created

---

### 4. Verification Page Integration

Current status:

The Verify Sample page shows local proof information and Stellar testnet verification details.

Next planned step:

Add a UI section for:

* Contract ID
* Testnet proof ID
* Stored event hash
* Verification status
* Transaction reference

---

### 5. Wallet/Testnet Flow

Planned.

Possible approaches:

1. Start with static testnet verification display.
2. Add backend-assisted contract invocation later.
3. Add wallet-based signing after frontend flow is stable.

For the next MVP step, avoid complex wallet integration until the UI and contract interaction flow are clear.

---

## Recommended Next Build Order

1. Add on-chain status panel to Create Proof page.
2. Add sample testnet proof record display to Verify Sample page.
3. Add links to Stellar explorer for deployment and proof transaction.
4. Add frontend-safe contract helper functions.
5. Explore wallet/testnet signing options.
6. Add live contract invocation only after safe testing.

---

## Safety Rules

Do not expose or store:

* Private keys
* Secret keys
* Seed phrases
* Mainnet wallet credentials
* Patient records
* Client files
* Personal data
* Financial documents

Only display:

* Public contract ID
* Public transaction hashes
* Public testnet address
* Proof hashes
* Proof IDs
* Verification metadata

---

## Current Integration Status

Status: Partial frontend integration completed.

Completed:

* Static contract config
* Public testnet page
* Create Proof page contract display
* Verify Sample page Stellar section
* README screenshots

Pending:

* Live frontend contract invocation
* Wallet/testnet signing flow
* Dynamic on-chain proof lookup
* Final demo screenshots
* Updated demo walkthrough

---

## Next Milestone

The next practical milestone is:

Show a clearer on-chain proof status flow inside the Create Proof page without adding wallet complexity yet.

This keeps the Web MVP stable while preparing for real contract interaction.
