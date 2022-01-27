require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CZYsxYGLgJ2uV2WSvcda6EIe1-r7hYl_',
      accounts: ['b25583f5f81cc0ffdb64ca6dd46aee2efbaeb41380ba3ddc03921e2f99f13b6c'],
    },
  },
};