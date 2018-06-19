/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
    networks: {
      development: {
        host: "localhost",
        port: 8545,
        network_id: "*" // Match any network id
      },
      rinkeby: {
        host: "localhost", // Connect to geth on the specified
        port: 8545,
        from: "0x74ca14c800b20bd070333b59e3492219f3582cbc", // default address to use for any transaction Truffle makes during migrations
        network_id: 4,
        gas: 4000000,
        gasPrice: 4000000000
      }
    }
  };