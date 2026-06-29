# Stellar Testnet Deployment Notes

This document tracks the Stellar/Soroban testnet deployment flow for the ProofSetu Protocol proof registry contract.

The contract has been built, tested locally, deployed to Stellar testnet, and invoked successfully.

---

## Current Status

Status: Stellar testnet deployment completed successfully.

Completed:

* Stellar CLI installed
* wasm32v1-none Rust target confirmed
* Proof registry contract scaffold added
* Contract build validated
* Local tests added
* Local tests passed
* Contract deployed to Stellar testnet
* Testnet proof record created
* Testnet proof record retrieved
* Correct hash verification returned true
* Wrong hash verification returned false

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

## Deployment Result

Contract deployed successfully to Stellar testnet.

Contract ID:

CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ

Deployment transaction/hash:

5ee448eb186c966fe6965fa7282b94d78a96df4e596dd9d0f6326cf3d0f6261b

Create proof transaction/hash:

8a7fd049fcaf57e0c438a1b521b08cd30afe762cd6b74c172c302faccd98f132

Wasm hash:

743718b322e6dc81af3677bafadd236f4a85a76c87171a7847c582f25b400166

Deployment date:

2026-06-29

Deployer testnet public address:

GAT2L4GYPN2TST44AQA6QFVNWB4BUM7SXC73B4D5Y7PA4YRNHCLL

---

## Testnet Invocation Result

The deployed proof registry contract was tested successfully on Stellar testnet.

Test proof ID:

PS-TESTNET-001

Stored proof record:

{
"creator": "proofsetu_testnet_deployer",
"event_hash": "sample_testnet_hash_001",
"proof_type": "freelancer_milestone",
"reference_id": "PROOFSETU-TESTNET-001",
"status": "created",
"timestamp": "2026-06-29T00:00:00Z"
}

Function results:

* create_proof returned true
* get_proof returned stored proof record
* verify_proof with correct hash returned true
* verify_proof with wrong hash returned false

This confirms that the testnet contract can create, retrieve, and verify workflow proof records.

---

## Deployment Commands Used

Go to contract folder:

cd contracts/proof-registry

Build contract:

stellar contract build

Deploy contract:

stellar contract deploy 
--wasm target/wasm32v1-none/release/proof_registry.wasm 
--source-account proofsetu-deployer 
--network testnet 
--alias proof_registry

Create proof:

stellar contract invoke 
--id CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ 
--source-account proofsetu-deployer 
--network testnet 
-- 
create_proof 
--proof_id PS-TESTNET-001 
--proof_type freelancer_milestone 
--event_hash sample_testnet_hash_001 
--creator proofsetu_testnet_deployer 
--reference_id PROOFSETU-TESTNET-001 
--timestamp 2026-06-29T00:00:00Z

Get proof:

stellar contract invoke 
--id CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ 
--source-account proofsetu-deployer 
--network testnet 
-- 
get_proof 
--proof_id PS-TESTNET-001

Verify correct hash:

stellar contract invoke 
--id CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ 
--source-account proofsetu-deployer 
--network testnet 
-- 
verify_proof 
--proof_id PS-TESTNET-001 
--event_hash sample_testnet_hash_001

Verify wrong hash:

stellar contract invoke 
--id CD7VTK6VVMXCBWHOGPGWEHG3KFOLNSYMV3DNGK5BDMRWH74HGKLZRGGZ 
--source-account proofsetu-deployer 
--network testnet 
-- 
verify_proof 
--proof_id PS-TESTNET-001 
--event_hash wrong_hash_001

---

## Safety Notes

* This deployment uses Stellar testnet only.
* No mainnet funds were used.
* No private keys or seed phrases should be committed.
* Private documents must not be stored on-chain.
* Only hashes and minimal verification metadata should be stored.

---

## Next Documentation Updates

After this deployment result, update:

* README.md
* PROJECT_STATUS.md
* docs/GRANT_READINESS.md
* docs/PHASE_2_STELLAR_PLAN.md
* contracts/proof-registry/README.md

Next development task:

Connect the Web MVP to the deployed Soroban proof registry contract.
