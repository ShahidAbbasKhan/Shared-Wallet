
const hre = require("hardhat");

async function main() {

  const Allowance = await hre.ethers.getContractFactory("Allowance");
  const allowance = await Allowance.deploy();

  await allowance.deployed();

  console.log(
    `SharedWallet is deployed to address ${sharedwallet.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
