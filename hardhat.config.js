require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
const ALCHEMY_API_KEY = process.env.GOERLI_RPC_URL1;
const GOERLI_PRIVATE_KEY = process.env.GOERLI_PVT_KEY1;
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY]
    },
  },
  etherscan: {
    apiKey: "ABCDE12345ABCDE12345ABCDE123456789",
  },

};
