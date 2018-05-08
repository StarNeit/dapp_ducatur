# Ducatur Dapp
NodeJS Dapp with ethereum smart contract and infura.io


## Deployed smart contract (Ropsten)

https://ropsten.etherscan.io/address/0x9646c843060b68c454116d4ff31d4659a4a87852
https://ropsten.etherscan.io/address/0x54c9d0499b444ab4b6c737b549a35eb230bde046
https://ropsten.etherscan.io/address/0xa97bc4562ae2ec7f116ad0514a2ec6eb285e0d5c


## Requirements

To run tests you need to install the following software:

- [Truffle v3.2.4](https://github.com/trufflesuite/truffle-core)
- [EthereumJS TestRPC v3.0.5](https://github.com/ethereumjs/testrpc)


## How to test

Open the terminal and run the following commands:

```sh
$ cd dapp_ducatur
$ truffle migrate
$ node index.js
```

NOTE: All tests must be run separately as specified.


## Deployment

To deploy smart contracts to live network do the following steps:
1. Go to the smart contract folder and run truffle console:
```sh
$ cd dapp_ducatur
$ truffle console
```
2. Inside truffle console, invoke "migrate" command to deploy contracts:
```sh
truffle> migrate
```
3. Deploy to ethereum test network
```sh
update truffle-config.js and migrate
```
