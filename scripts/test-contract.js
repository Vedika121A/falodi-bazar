const { ethers } = require("hardhat");

async function main() {
  const ElectionMarket = await ethers.getContractFactory("ElectionMarket");
  const electionMarket = await ElectionMarket.deploy();
  await electionMarket.deployed();

  console.log("Contract deployed to:", electionMarket.address);

  // Create a test market
  await electionMarket.createMarket("2024 Indian General Election", 86400); // 1 day duration
  console.log("Market created!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
