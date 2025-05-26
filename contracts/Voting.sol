// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        uint voteCount;
    }

    mapping(uint => Candidate) public candidates;
    mapping(address => bool) public voters;
    mapping(string => bool) public candidateExists; // To prevent duplicate candidates

    uint public candidatesCount;

    event votedEvent(uint indexed candidateId);
    event candidateAdded(uint indexed candidateId, string name);

    constructor() {
        addCandidate("Rama");
        addCandidate("Nick");
        addCandidate("Jose");
    }

    function addCandidate(string memory _name) public {
        require(!candidateExists[_name], "Candidate already exists");
        require(bytes(_name).length > 0, "Name cannot be empty");
        
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
        candidateExists[_name] = true;
        
        emit candidateAdded(candidatesCount, _name);
    }

    function vote(uint _candidateId) public {
        require(!voters[msg.sender], "Already voted.");
        require(
            _candidateId > 0 && _candidateId <= candidatesCount,
            "Invalid candidate"
        );

        voters[msg.sender] = true;
        candidates[_candidateId].voteCount++;

        emit votedEvent(_candidateId);
    }
} 