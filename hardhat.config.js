require("@nomiclabs/hardhat-waffle");
require("./tasks/faucet");
require('dotenv').config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const INFURA_KEY = process.env.INFURA_KEY;

const KOVAN_PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY;

console.log(INFURA_KEY + " " + KOVAN_PRIVATE_KEY);

module.exports = {
  solidity: "0.7.3",
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
