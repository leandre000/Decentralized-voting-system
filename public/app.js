let web3;
let votingContract;
let currentAccount;

const contractAddress = "0x8c1Da5Dd49ED04D0b07602751980CC0ceaCD4183";
const contractABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "candidateAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "candidateId",
                "type": "uint256"
            }
        ],
        "name": "votedEvent",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            }
        ],
        "name": "addCandidate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "candidates",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "id",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "voteCount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "candidatesCount",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "name": "candidateExists",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_candidateId",
                "type": "uint256"
            }
        ],
        "name": "vote",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "voters",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];

async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            
            // Create Web3 instance
            web3 = new Web3(window.ethereum);
            
            // Get connected account
            const accounts = await web3.eth.getAccounts();
            currentAccount = accounts[0];
            document.getElementById('account').innerText = `Connected Account: ${currentAccount}`;
            
            // Initialize contract
            votingContract = new web3.eth.Contract(contractABI, contractAddress);
            
            // Load candidates
            await loadCandidates();
            
            // Listen for account changes
            window.ethereum.on('accountsChanged', function (accounts) {
                currentAccount = accounts[0];
                document.getElementById('account').innerText = `Connected Account: ${currentAccount}`;
                loadCandidates();
            });
        } catch (err) {
            console.error("Failed to connect MetaMask:", err);
            alert("Failed to connect to MetaMask. Please try again.");
        }
    } else {
        alert("MetaMask not detected! Please install MetaMask to use this application.");
    }
}

async function loadCandidates() {
    try {
        const count = await votingContract.methods.candidatesCount().call();
        const list = document.getElementById("candidates");
        list.innerHTML = "";
        
        for (let i = 1; i <= count; i++) {
            const candidate = await votingContract.methods.candidates(i).call();
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${candidate.name} - ${candidate.voteCount} votes</span>
                <button onclick="vote(${candidate.id})">Vote</button>
            `;
            list.appendChild(li);
        }
    } catch (err) {
        console.error("Error loading candidates:", err);
        alert("Error loading candidates. Please make sure you're connected to the correct network.");
    }
}

async function vote(candidateId) {
    if (!currentAccount) {
        alert("Please connect your MetaMask wallet first!");
        return;
    }

    try {
        await votingContract.methods.vote(candidateId).send({ from: currentAccount });
        alert("Vote successfully cast!");
        await loadCandidates();
    } catch (err) {
        console.error("Error casting vote:", err);
        alert("Failed to cast vote. You may have already voted or the transaction was rejected.");
    }
}

async function addCandidate() {
    if (!currentAccount) {
        alert("Please connect your MetaMask wallet first!");
        return;
    }

    const candidateName = document.getElementById('candidateInput').value.trim();
    if (!candidateName) {
        alert("Please enter a candidate name");
        return;
    }

    try {
        await votingContract.methods.addCandidate(candidateName)
            .send({ from: currentAccount });
        alert("Candidate added successfully!");
        document.getElementById('candidateInput').value = '';
        await loadCandidates();
    } catch (err) {
        console.error("Error adding candidate:", err);
        if (err.message.includes("Candidate already exists")) {
            alert("This candidate already exists!");
        } else {
            alert("Failed to add candidate. Please try again.");
        }
    }
} 