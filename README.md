# Voting DApp

A simple decentralized voting application built with Solidity and Web3.js.

## Prerequisites

- Node.js and npm
- Truffle
- Ganache
- MetaMask browser extension

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start Ganache and make sure it's running on port 7545

4. Compile and deploy the smart contract:

   ```bash
   truffle compile
   truffle migrate
   ```

5. Copy the deployed contract address from the migration output and paste it into the `contractAddress` variable in `public/app.js`

6. Serve the frontend:

   ```bash
   npx http-server public
   ```

7. Open your browser and navigate to `http://localhost:8080`

## Usage

1. Connect your MetaMask wallet to the Ganache network (usually http://localhost:7545)
2. Click "Connect MetaMask" button to connect your wallet
3. View the list of candidates
4. Click "Vote" next to a candidate to cast your vote
5. Confirm the transaction in MetaMask

## Features

- Connect to MetaMask wallet
- View list of candidates
- Vote for a candidate (one vote per address)
- Real-time update of vote counts
- Prevention of double voting

## Smart Contract

The smart contract includes:

- Candidate management
- Voting mechanism
- Vote tracking
- Event emission for votes

## Security Features

- Prevention of double voting
- Validation of candidate IDs
- Only one vote per address
