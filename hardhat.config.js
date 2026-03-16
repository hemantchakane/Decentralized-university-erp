require("@nomicfoundation/hardhat-toolbox");

// require("@nomicfoundation/hardhat-toolbox");
// require("hardhat-gas-reporter");
// require("solidity-coverage");
// require("dotenv").config();


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    ganache: {
      url: "http://127.0.0.1:8545",
      chainId: 1337,
      gas: 2100000,
      gasPrice: 8000000000
    },
    localhost: {
      url: "http://127.0.0.1:8545",
      chainId: 31337
    }
  },
  paths: {
    artifacts: "../frontend/src/artifacts"
  },
  mocha: {
    timeout: 40000
  }
};