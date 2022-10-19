
const hre = require("hardhat");

async function main() {

  const SharedWallet = await hre.ethers.getContractFactory("SharedWallet");
  const sharedwallet = await SharedWallet.deploy();

  await sharedwallet.deployed();

  console.log(
    `SharedWallet is deployed to address ${sharedwallet.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
