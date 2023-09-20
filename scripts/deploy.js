// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const domains = await hre.ethers.deployContract("Domains");

  await domains.waitForDeployment();
  console.log("Contract deployed to:", domains.target);

  // We're passing in a second variable - value. This is the moneyyyyyyyyyy
  // The price of the domain (including gas) in Matic
  let txn = await domains.register("hancom", {
    value: hre.ethers.parseEther("0.1"),
  });
  await txn.wait();

  const address = await domains.getAddress("hancom");
  console.log("Owner of domain hancom:", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
