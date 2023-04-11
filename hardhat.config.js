require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");

const fs = require('fs');
const secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));


module.exports = {
  solidity: "0.8.7",
  networks: {
    testnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      accounts: [secrets.privateKey],
    },
  },
};
