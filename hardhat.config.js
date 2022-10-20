require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  paths: {
    artifacts: "./src/artifacts",
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
  },
  networks: {
    hardhat: {},
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/rGsBvJIvvFJYAvCiPc3-Ls_bW5zvwLWt",
      accounts: [
        `0x90dd98e24d269a50a5e61e1cccb6fa4e446308e42c189bc1f715a9cc7d15f549`,
      ],
    },
  },
};
