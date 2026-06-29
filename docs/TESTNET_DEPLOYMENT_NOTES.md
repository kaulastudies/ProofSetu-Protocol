# Stellar Testnet Deployment Notes

This document tracks the planned Stellar/Soroban testnet deployment flow for the ProofSetu Protocol proof registry contract.

The contract has already been built and tested locally in GitHub Codespaces. The next step is to deploy it to Stellar testnet.

---

## Current Status

Status: Deployment notes prepared. Testnet deployment pending.

Completed:

* Stellar CLI installed
* wasm32v1-none target confirmed
* Proof registry contract scaffold added
* Contract build validated
* Local tests added
* Local tests passed
* Build and test results documented

Pending:

* Create testnet identity
* Fund testnet identity
* Deploy contract to Stellar testnet
* Record contract ID
* Record deployment transaction/hash
* Invoke contract functions on testnet
* Update README and grant readiness documents

---

## Environment

Deployment environment:

* GitHub Codespaces
* Stellar CLI version: 27.0.0
* Network: Stellar testnet
* Contract folder: contracts/proof-registry

---

## Contract Build Result

Validated build result:

* Wasm file: target/wasm32v1-none/release/proof_registry.wasm
* Wasm hash: 743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166
* Wasm size: 3928 bytes optimized
* Exported functions:

  * create_proof
  * get_proof
  * verify_proof

---

## Step 1 — Go to Contract Folder

From the repository root:

```bash
cd contracts/proof-registry
```

---

## Step 2 — Confirm Stellar CLI

```bash
stellar --version
```

Expected:

```txt
stellar 27.0.0
```

---

## Step 3 — Use Stellar Testnet

```bash
stellar network use testnet
```

---

## Step 4 — Create Funded Testnet Identity

Create a testnet deployer identity:

```bash
stellar keys generate proofsetu-deployer --network testnet --fund
```

Check the public address:

```bash
stellar keys address proofsetu-deployer
```

List available keys:

```bash
stellar keys ls -l
```

Important: this is for testnet only. Do not use a real mainnet wallet or private key.

---

## Step 5 — Build Contract

From the contract folder:

```bash
stellar contract build
```

Expected Wasm output:

```txt
target/wasm32v1-none/release/proof_registry.wasm
```

---

## Step 6 — Deploy Contract to Testnet

Deploy the proof registry contract:

```bash
stellar contract deploy \
  --wasm target/wasm32v1-none/release/proof_registry.wasm \
  --source-account proofsetu-deployer \
  --network testnet \
  --alias proof_registry
```

Expected result:

```txt
Contract ID: C...
```

Record the contract ID below after deployment.

---

## Deployment Result

Contract ID:

```txt
Pending
```

Deployment transaction/hash:

```txt
Pending
```

Deployment date:

```txt
Pending
```

Deployer testnet address:

```txt
Pending
```

---

## Step 7 — Invoke create_proof

After deployment, create a sample proof record on testnet.

```bash
stellar contract invoke \
  --id proof_registry \
  --source-account proofsetu-deployer \
  --network testnet \
  -- \
  create_proof \
  --proof_id PS-TESTNET-001 \
  --proof_type freelancer_milestone \
  --event_hash sample_testnet_hash_001 \
  --creator proofsetu_testnet_deployer \
  --reference_id PROOFSETU-TESTNET-001 \
  --timestamp 2026-06-29T00:00:00Z
```

If the CLI simulates first and asks to send the transaction, rerun with the send option shown by the CLI.

---

## Step 8 — Invoke get_proof

```bash
stellar contract invoke \
  --id proof_registry \
  --source-account proofsetu-deployer \
  --network testnet \
  -- \
  get_proof \
  --proof_id PS-TESTNET-001
```

Expected result:

The contract should return the stored proof record.

---

## Step 9 — Invoke verify_proof

```bash
stellar contract invoke \
  --id proof_registry \
  --source-account proofsetu-deployer \
  --network testnet \
  -- \
  verify_proof \
  --proof_id PS-TESTNET-001 \
  --event_hash sample_testnet_hash_001
```

Expected result:

```txt
true
```

---

## Troubleshooting Notes

### Build requires overflow checks

If the build fails with overflow-checks error, confirm Cargo.toml includes:

```toml
[profile.release]
overflow-checks = true
```

### Missing Wasm file

If the Wasm file is missing, run:

```bash
stellar contract build
```

from:

```txt
contracts/proof-registry
```

### Identity not found

If the deployer identity is not found, run:

```bash
stellar keys ls -l
```

If needed, recreate the testnet identity:

```bash
stellar keys generate proofsetu-deployer --network testnet --fund
```

### Read-only simulation message

For read-only functions, the CLI may return a simulated result without submitting a transaction. This is expected for read-only contract interactions.

---

## Safety Notes

* Use testnet only.
* Do not use mainnet funds.
* Do not paste private keys into GitHub.
* Do not commit seed phrases.
* Do not store patient, client, invoice, or private document data on-chain.
* Only proof hashes and minimal metadata should be stored.

---

## Next Documentation Updates After Deployment

After successful deployment, update:

* README.md
* PROJECT_STATUS.md
* docs/GRANT_READINESS.md
* docs/PHASE_2_STELLAR_PLAN.md
* contracts/proof-registry/README.md

Add:

* Contract ID
* Deployment date
* Testnet proof example
* Sample invocation result
* Screenshots if available
