#![no_std]

use soroban_sdk::{contract, contractimpl, contracttype, symbol_short, Env, String, Symbol};

#[contracttype]
#[derive(Clone)]
pub struct ProofRecord {
    pub proof_type: String,
    pub event_hash: String,
    pub creator: String,
    pub reference_id: String,
    pub timestamp: String,
    pub status: String,
}

#[contract]
pub struct ProofRegistryContract;

#[contractimpl]
impl ProofRegistryContract {
    pub fn create_proof(
        env: Env,
        proof_id: String,
        proof_type: String,
        event_hash: String,
        creator: String,
        reference_id: String,
        timestamp: String,
    ) -> bool {
        let key = Self::proof_key(&env, proof_id.clone());

        if env.storage().persistent().has(&key) {
            panic!("proof already exists");
        }

        let record = ProofRecord {
            proof_type,
            event_hash,
            creator,
            reference_id,
            timestamp,
            status: String::from_str(&env, "created"),
        };

        env.storage().persistent().set(&key, &record);

        true
    }

    pub fn get_proof(env: Env, proof_id: String) -> ProofRecord {
        let key = Self::proof_key(&env, proof_id);

        env.storage()
            .persistent()
            .get(&key)
            .expect("proof not found")
    }

    pub fn verify_proof(env: Env, proof_id: String, event_hash: String) -> bool {
        let key = Self::proof_key(&env, proof_id);

        let record: ProofRecord = env
            .storage()
            .persistent()
            .get(&key)
            .expect("proof not found");

        record.event_hash == event_hash
    }

    fn proof_key(env: &Env, proof_id: String) -> (Symbol, String) {
        (symbol_short!("PROOF"), proof_id)
    }
}
