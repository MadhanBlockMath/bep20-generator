// require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true,
      gasPrice: 5000000000,
      gasMultiplier: 2,
    },
    bnbTestnet: {
      chainId: 97,
      url: `https://old-necessary-gadget.bsc-testnet.discover.quiknode.pro/ce5b15bbc20725046c5cba4fe55575c85b9bbcd1/`,
      accounts: [`0xc63e615cf096df90a567cf28651e476850fcde4da1b6bc8ba37377da6af9a92b`],
      gas: 5000000000,
      // gasPrice: 5000000000,
      gasMultiplier: 2,
      allowUnlimitedContractSize: true,
    },
    mumbai: {
      chainId: 80001,
      url: `https://polygon-mumbai.g.alchemy.com/v2/w16kDVk2RE_AcqeWzp9A9__tTsfErMBt`,
      // gasPrice: 15000000000,
      // gasMultiplier: 4,
      accounts: [`0xc63e615cf096df90a567cf28651e476850fcde4da1b6bc8ba37377da6af9a92b`],
      allowUnlimitedContractSize: true,
    }
  },
  etherscan: {
    apiKey: 'AA5S7XCGN6C55J6TF5T3HVV2WBHWHKF5KS',
  },
  solidity: {
    version: '0.8.9',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
