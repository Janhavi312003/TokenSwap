# TokenSwap – ERC-20 Token Exchange DApp

TokenSwap is a decentralized Web3 application that enables users to securely swap ERC-20 tokens using smart contracts on an Ethereum-compatible blockchain network.

The project demonstrates smart contract development, wallet integration, token approvals, and frontend interaction using modern Web3 tools like Hardhat and Ethers.js.

## Features

- ERC-20 token swapping
- MetaMask wallet integration
- Smart contract deployment using Hardhat
- Secure token transfer handling
- Web3 frontend integration with Ethers.js
- Blockchain transaction confirmation flow
- Responsive frontend UI

## Tech Stack

| Layer | Technology |
|-------|-------------|
| Smart Contracts | Solidity |
| Development Framework | Hardhat |
| Frontend | React.js / Next.js |
| Web3 Integration | Ethers.js |
| Wallet | MetaMask |
| Network | Ethereum-compatible Testnet |

---

## Project Structure

```bash
TokenSwap/
├── contracts/          # Solidity smart contracts
├── ignition/           # Hardhat Ignition deployment modules
├── scripts/            # Deployment scripts
├── test/               # Smart contract tests
├── frontend/           # Frontend application
├── hardhat.config.js   # Hardhat configuration
└── package.json
```
## How TokenSwap Works

- High-Level Flow
- User connects MetaMask wallet
- Frontend connects to blockchain using Ethers.js
- User selects tokens for swapping
- Smart contract checks token approvals
- Transaction is signed through MetaMask
- Smart contract executes token transfer
- Updated balances are reflected on the frontend
---
## Smart Contract Features

- Handles ERC-20 token transfers
- Verifies token approvals before swap
- Executes secure token exchange
- Prevents unauthorized transfers
- Supports Ethereum-compatible wallets
---
## Wallet Integration

The DApp uses MetaMask for:

- Wallet authentication
- Transaction signing
- Account connection
- Blockchain interaction

Ethers.js is used to:

- Connect frontend with smart contracts
- Read blockchain data
- Send transactions
- Listen for transaction confirmations
---
## Getting Started
### Prerequisites

- Node.js
- MetaMask Wallet
- Testnet ETH
- npm or yarn
---
## Installation
### Clone the Repository
```bash
git clone https://github.com/Janhavi312003/TokenSwap.git
cd TokenSwap
```
### Install Dependencies
```bash
npm install
```
### Compile Smart Contracts
```bash
npx hardhat compile
```
### Run Tests
```bash
npx hardhat test
```
### Start Local Hardhat Node
```bash
npx hardhat node
```
### Deploy Smart Contracts
```bash
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
### Run Frontend
```bash
npm run dev
```
---
### Open:
```bash
http://localhost:3000
```
---

## Deployment

- Smart contracts deployed on Ethereum-compatible testnet
- Frontend deployed on Vercel
---
## Live Demo

token-swap-71xu-ef9naoxoc-janhavis-projects-94ce3bb4.vercel.app
---

## Learning Outcomes

This project helped in understanding:

- Solidity smart contract development
- ERC-20 token standards
- Hardhat workflow
- Wallet connection flow
- Ethers.js integration
- Blockchain transaction lifecycle
- Web3 frontend architecture
---
