use super::*;
use soroban_sdk::{Env, String};

#[test]
fn test_create_get_and_verify_proof() {
    let env = Env::default();
    let contract_id = env.register(ProofRegistryContract, ());
    let client = ProofRegistryContractClient::new(&env, &contract_id);

    let proof_id = String::from_str(&env, "PS-TEST-001");
    let proof_type = String::from_str(&env, "freelancer_milestone");
    let event_hash = String::from_str(&env, "sample_hash_001");
    let creator = String::from_str(&env, "sample_creator_wallet");
    let reference_id = String::from_str(&env, "PROOFSETU-TEST-001");
    let timestamp = String::from_str(&env, "2026-06-29T00:00:00Z");

    let created = client.create_proof(
        &proof_id,
        &proof_type,
        &event_hash,
        &creator,
        &reference_id,
        &timestamp,
    );

    assert_eq!(created, true);

    let record = client.get_proof(&proof_id);

    assert_eq!(record.proof_type, proof_type);
    assert_eq!(record.event_hash, event_hash);
    assert_eq!(record.creator, creator);
    assert_eq!(record.reference_id, reference_id);
    assert_eq!(record.timestamp, timestamp);
    assert_eq!(record.status, String::from_str(&env, "created"));

    let verified = client.verify_proof(&proof_id, &event_hash);

    assert_eq!(verified, true);
}

#[test]
fn test_verify_wrong_hash_returns_false() {
    let env = Env::default();
    let contract_id = env.register(ProofRegistryContract, ());
    let client = ProofRegistryContractClient::new(&env, &contract_id);

    let proof_id = String::from_str(&env, "PS-TEST-002");
    let proof_type = String::from_str(&env, "grant_deliverable");
    let event_hash = String::from_str(&env, "correct_hash");
    let wrong_hash = String::from_str(&env, "wrong_hash");
    let creator = String::from_str(&env, "sample_creator_wallet");
    let reference_id = String::from_str(&env, "PROOFSETU-TEST-002");
    let timestamp = String::from_str(&env, "2026-06-29T00:00:00Z");

    client.create_proof(
        &proof_id,
        &proof_type,
        &event_hash,
        &creator,
        &reference_id,
        &timestamp,
    );

    let verified = client.verify_proof(&proof_id, &wrong_hash);

    assert_eq!(verified, false);
}

#[test]
#[should_panic]
fn test_duplicate_proof_id_panics() {
    let env = Env::default();
    let contract_id = env.register(ProofRegistryContract, ());
    let client = ProofRegistryContractClient::new(&env, &contract_id);

    let proof_id = String::from_str(&env, "PS-TEST-003");
    let proof_type = String::from_str(&env, "invoice_approval");
    let event_hash = String::from_str(&env, "sample_hash_003");
    let creator = String::from_str(&env, "sample_creator_wallet");
    let reference_id = String::from_str(&env, "PROOFSETU-TEST-003");
    let timestamp = String::from_str(&env, "2026-06-29T00:00:00Z");

    client.create_proof(
        &proof_id,
        &proof_type,
        &event_hash,
        &creator,
        &reference_id,
        &timestamp,
    );

    client.create_proof(
        &proof_id,
        &proof_type,
        &event_hash,
        &creator,
        &reference_id,
        &timestamp,
    );
}
