# Deployment Guide

This guide explains how to deploy the ProofSetu Protocol Web MVP on Vercel.

## Project Structure

The web app is located inside:

```txt
apps/web
```

When deploying on Vercel, the root directory must be set to:

```txt
apps/web
```

## Vercel Deployment Steps

1. Go to Vercel.
2. Click **Add New Project**.
3. Import the GitHub repository.
4. In project settings, set **Root Directory** to:

```txt
apps/web
```

5. Keep framework preset as:

```txt
Next.js
```

6. Build command:

```txt
npm run build
```

7. Install command:

```txt
npm install
```

8. Output directory:

```txt
.next
```

9. Click **Deploy**.

## Environment Variables

No environment variables are required for the first Web MVP.

Future versions may require:

* Stellar network configuration
* Contract ID
* Wallet integration settings
* API keys for optional services

## Current Deployment Goal

The current goal is to deploy the landing page and Web MVP publicly.

Later versions will add:

* Proof creation form
* Hash generation
* Local proof registry
* Public verification pages
* Stellar/Soroban testnet integration
