# ProofSetu Protocol

ProofSetu Protocol is an open-source verifiable workflow proof layer built on Stellar/Soroban.
## Live Demo

https://proof-setu-protocol.vercel.app/

It helps freelancers, NGOs, startups, service businesses, hospitals, and grant teams create tamper-evident proof records for documents, milestones, invoices, deliverables, and AI-assisted workflow decisions.

Private documents are not stored on-chain. ProofSetu stores only hashes, timestamps, proof metadata, and verification references.

## Problem

Important real-world work often depends on scattered proof across WhatsApp, email, PDFs, screenshots, spreadsheets, and internal tools.

This creates disputes, delays, weak auditability, and lack of trust between parties.

Examples:

* A freelancer says a milestone was completed.
* A client says an invoice was approved or not approved.
* An NGO wants to prove donation usage.
* A startup wants to prove grant deliverables.
* A hospital wants to prove that a claim document was submitted.
* An AI-assisted workflow needs an accountable decision trail.

## Solution

ProofSetu Protocol creates verifiable proof records for real-world workflow events.

Each proof record can include:

* Proof ID
* Proof type
* Event title
* Short description
* Document or event hash
* Timestamp
* Creator wallet
* Network reference
* Verification status

The long-term goal is to anchor these proof records on Stellar/Soroban so anyone can verify that an event existed at a specific time without exposing private documents.

## Why Stellar

Stellar provides fast, low-cost, open financial infrastructure suitable for real-world payment and trust workflows.

ProofSetu uses Stellar/Soroban to make workflow proof records verifiable, transparent, and ready to connect with future payment, milestone, invoice, escrow, remittance, or stablecoin settlement flows.

## MVP Scope

The first version will include:

* Landing page
* Proof creation form
* Hash generation
* Local proof registry
* Public verification page
* Example proof records
* Stellar testnet integration roadmap
* Soroban proof registry contract roadmap

## Use Cases

1. Freelancer milestone proof
2. NGO donation usage proof
3. Startup grant deliverable proof
4. Invoice approval proof
5. Hospital document submission proof
6. AI-assisted decision proof

## Documentation

* [Grant Proposal](docs/GRANT_PROPOSAL.md)
* [Milestones](docs/MILESTONES.md)
* [Architecture](docs/ARCHITECTURE.md)
* [Use Cases](docs/USE_CASES.md)
* [Roadmap](docs/ROADMAP.md)
* [Deployment Guide](docs/DEPLOYMENT.md)
* [Project Status](PROJECT_STATUS.md)

## Example Proof Records

* [Freelancer Milestone Proof](examples/freelancer-milestone-proof.json)
* [NGO Donation Usage Proof](examples/ngo-donation-proof.json)
* [Hospital Document Submission Proof](examples/hospital-document-proof.json)

## Current Status

ProofSetu Protocol is currently in the repository setup and documentation stage.

Next planned step: build the first web MVP with proof creation, hash generation, and public verification pages.

## License

MIT
