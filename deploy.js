const { ethers } = require('ethers')   // importing ethers library
const fs = require('fs')  // this will be used to read our .abi and .bin file for the smart contract

// this will deploy our smart contract in blockchain
// in order to deploy the contract in the blockchain we need the abi of the smart contract and the binary(.bin file of the contract)
// for deploying the contract we need to first connect our script to the blockchain hence initial code will be same as main function
async function main() {
    const Provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545')
    const wallet = new ethers.Wallet('0xe13c3fac4cf7795820b0c83df3b944cf38cd2b0c51c97146591514d68e782792', Provider)
    const abi = fs.readFileSync('./contractinteraction_sol_wallet.abi', 'utf8')
    const binary = fs.readFileSync('./contractinteraction_sol_wallet.bin', 'utf8')
    const contractfactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("deploying your contract...")
    const contract = await contractfactory.deploy({ gasPrice: 1000000000, gasLimit: 3000000 }) // we can give gas limit/ gas price in override
    console.log(contract)
    console.log("contract deployed successfully")
}
main()
