const MyCoins = artifacts.require(“./MyCoins.sol”)
module.exports = function(deployer, network, accounts) {
 deployer.deploy(MyCoins);
};
