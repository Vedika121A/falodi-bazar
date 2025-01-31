// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ElectionMarket {
    struct Market {
        string electionName;
        uint256 endTime;
        bool resolved;
        bool outcome;
        uint256 totalStake;
    }

    Market[] public markets;
    address public admin;

    constructor() {
        admin = msg.sender;
    }

    // Create a new election market (admin-only)
    function createMarket(string memory _electionName, uint256 _duration) public {
        require(msg.sender == admin, "Only admin can create markets");
        markets.push(Market({
            electionName: _electionName,
            endTime: block.timestamp + _duration,
            resolved: false,
            outcome: false,
            totalStake: 0
        }));
    }

    // Resolve market (admin-only)
    function resolveMarket(uint256 marketId, bool _outcome) public {
        require(msg.sender == admin, "Only admin can resolve markets");
        require(marketId < markets.length, "Invalid market");
        markets[marketId].resolved = true;
        markets[marketId].outcome = _outcome;
    }
}
