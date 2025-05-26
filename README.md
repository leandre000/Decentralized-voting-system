# 🗳️ Voting DApp

A simple yet powerful **Decentralized Voting Application** built using **Solidity**, **Truffle**, **Web3.js**, and **MetaMask**.  
Vote securely on the Ethereum blockchain with transparency and immutability.

---

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-Active-brightgreen)
![Ethereum](https://img.shields.io/badge/Ethereum-Smart%20Contract-3C3C3D?logo=ethereum)
![MetaMask](https://img.shields.io/badge/MetaMask-Supported-orange?logo=metamask)
![Web3](https://img.shields.io/badge/Web3.js-Enabled-yellowgreen?logo=javascript)

---

## 🚀 Features

- 🔐 **MetaMask Integration** — Connect securely using your Ethereum wallet
- 🧾 **Smart Contract Voting** — Immutable votes recorded on the blockchain
- 👤 **One Vote per Address** — Each user can vote only once
- 📈 **Live Vote Tally** — Real-time updates using Web3.js events
- 🧼 **Double Voting Protection** — Smart contract level enforcement
- ✅ **Valid Candidate Check** — Ensures only valid votes are accepted

---

## 🧰 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js & npm](https://nodejs.org/) 📦
- [Truffle Suite](https://trufflesuite.com/) 🛠️
- [Ganache](https://trufflesuite.com/ganache/) 🔧
- [MetaMask Extension](https://metamask.io/) 🦊

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/voting-dapp.git
cd voting-dapp
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Start Ganache
Ensure Ganache is running on port 7545.

4️⃣ Compile and Deploy Smart Contract
bash
Copy
Edit
truffle compile
truffle migrate
5️⃣ Configure Frontend
Copy the deployed contract address and paste it into public/app.js:

js
Copy
Edit
const contractAddress = "0xYourContractAddress";
6️⃣ Serve the Frontend
bash
Copy
Edit
npx http-server public
7️⃣ Open in Browser
Navigate to 👉 http://localhost:8080

🧪 Usage Guide
🦊 Connect your MetaMask wallet to the Ganache network (http://localhost:7545)

🔗 Click the "Connect MetaMask" button

👁️ View the list of candidates

🗳️ Click "Vote" next to your preferred candidate

✅ Confirm the transaction in MetaMask

📊 Watch the live vote tally update instantly!

📝 Smart Contract Features
The core Solidity contract handles:

🧑‍💼 Candidate Management

🔄 Voting Mechanism

📊 Vote Tracking

📢 Vote Events for UI Updates

🔒 Security Measures
❌ Double voting is strictly prevented

✅ Candidate IDs are validated

🧍 One Ethereum address = One vote

📂 Project Structure
csharp
Copy
Edit
voting-dapp/
├── contracts/
│   └── Voting.sol        # Smart contract
├── migrations/
│   └── 2_deploy_contracts.js
├── public/
│   ├── app.js            # Web3 + frontend logic
│   └── index.html        # UI
├── truffle-config.js
└── package.json
📸 Screenshots
🧾 Home Page	🗳️ Voting Interface

💡 Future Enhancements
🧑‍⚖️ Admin panel to add/remove candidates

📱 Mobile-responsive UI

🌍 IPFS integration for decentralized front-end hosting

📬 Email confirmation or off-chain notifications

🧑‍💻 Author
Izere Shema Leandre
🌐 Portfolio | 🐦 Twitter | 💼 LinkedIn
