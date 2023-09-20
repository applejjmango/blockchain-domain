require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/ubCmPUujwbNcE2T3KZrX-rpUx5Rc5OHH",
      accounts: [
        "91828388805ba0e1ace33e3aa154143ecf58dfdd8f47d610945a1c9742dc1c1d",
      ],
    },
  },
};
