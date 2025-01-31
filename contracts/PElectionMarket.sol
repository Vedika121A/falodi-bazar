// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ElectionMarket {
    struct Market {
        string electionName;
        bool resolved;
        bool outcome;
    }
    Market[] public markets;

    function createMarket(string memory _electionName) public {
        markets.push(Market(_electionName, false, false));
    }
}
