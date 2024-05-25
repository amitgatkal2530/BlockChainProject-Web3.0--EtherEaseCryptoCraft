require('@nomiclabs/hardhat-waffle');

// const SEPOLIA_PRIVATE_KEY = "b9f0b2b47b301d660d2a787d2d2d8c20f5f814068339c99a081575b7961769ab";

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/XSqHNEGAhkV2tMl0eMzkM0lFOTmilkBH',
      accounts: ['b9f0b2b47b301d660d2a787d2d2d8c20f5f814068339c99a081575b7961769ab'],
    },
  },
};