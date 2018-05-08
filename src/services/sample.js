var Web3 = require('web3');
var contract = require('truffle-contract');
var DucaturToken = require('../../build/contracts/DucaturToken.json');
var HDWalletProvider = require("truffle-hdwallet-provider");
var Transactions = require('../models/Transactions');

const hdWalletProvider = new HDWalletProvider(process.env.MNE, "https://ropsten.infura.io/VaxMZqBPDeLCJNBAsNN1");
const ownerAddress = hdWalletProvider.address;
const web3 = new Web3(hdWalletProvider);
const token = contract(DucaturToken);
token.setProvider(web3.currentProvider);

function sample() {
    console.log("\n----- Running Dapp task -----");

    var tokenAmount = 1000;
    var receipt = '0x1921610d1b0b019381e7593b2488c17f08871489';

    /**
     * Token mint with Infra.io
     */
    token.at(process.env.CONTRACTADDR)
        .then(contract => {
            contract.mint.sendTransaction(receipt, tokenAmount, {
            from: hdWalletProvider.address,
            gas: 211238,
            gasPrice: 10000000000 // 1 gwei = 10^9
        }).then(result => {
            console.log("[Transaction Hash] ", result);
            console.log("Token has been minted correctly");

            /**
             * Update MongoDB
             */
            var obj = new Transactions();
            obj.txNum = result;
            obj.save();
        })
        .catch(err => {
            console.log("[Mint Token Error] ", err.message);
        });
    });
};

module.exports = sample;