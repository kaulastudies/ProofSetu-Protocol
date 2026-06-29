# Security Policy

ProofSetu Protocol is an open-source workflow proof system designed to create verifiable proof records without exposing private documents.

## Security Principles

ProofSetu Protocol follows these principles:

* Do not store private documents on-chain
* Do not commit sensitive user data to the repository
* Store only hashes, timestamps, and proof metadata for verification
* Use dummy/sample data in examples
* Keep smart contract logic simple and auditable
* Document all security assumptions clearly

## Sensitive Data Warning

Do not upload or commit:

* Patient records
* Client documents
* Financial records
* Government IDs
* Private contracts
* Real invoices
* Personal data
* Private wallet keys
* Seed phrases
* API keys
* Environment variables

Only sample data and dummy proof records should be used in the repository.

## Smart Contract Security

The future Soroban proof registry contract should remain minimal.

Planned contract functions:

* `create_proof`
* `get_proof`
* `verify_proof`

Before any mainnet deployment, the contract should go through:

* Code review
* Testnet testing
* Security checklist review
* Access control review
* Storage design review
* Edge case testing

## Reporting Security Issues

If you discover a security issue, please open a GitHub issue with a clear description.

Do not include private keys, seed phrases, confidential documents, or sensitive personal data in any report.

## Current Status

The project is currently in early MVP planning and documentation stage.

No production smart contract has been deployed yet.
