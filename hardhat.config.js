require("@nomiclabs/hardhat-waffle");
require("./tasks/faucet");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_KEY = process.env.INFURA_KEY;

const KOVAN_PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.3"
      },
      {
        version: "0.7.6"
      }
    ]
  },
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
  networks: {
    kovan: {
      url: `https://kovan.infura.io/v3/${INFURA_KEY}`,
      accounts: [`0x${KOVAN_PRIVATE_KEY}`]
    },
    arbkovan4: {
      gasPrice: 0,
      url: "https://kovan4.arbitrum.io/rpc",
      accounts: [`0x${KOVAN_PRIVATE_KEY}`]
    },
  }
};
