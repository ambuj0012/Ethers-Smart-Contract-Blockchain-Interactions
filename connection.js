const { ethers } = require('ethers')   // importing ethers library
const fs = require('fs')  // this will be used to read our .abi and .bin file for the smart contract

// this function connects out script file with blockchain
async function main() {
    const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545') // this is blockchains rpc url
    const wallet = new ethers.Wallet('0xe13c3fac4cf7795820b0c83df3b944cf38cd2b0c51c97146591514d68e782792', provider) // this is wallet variable i.e one of the node of the blockchain network we need to give private key of the wallet and provider argument here
}


// this function fetches details of blockchain like blocknumber etc
const get_block_number = async () => {
    const provider = new ethers.providers.JsonRpcProvider('HTTP://127.0.0.1:7545')
    const wallet = new ethers.Wallet('0xe13c3fac4cf7795820b0c83df3b944cf38cd2b0c51c97146591514d68e782792', provider)

    const block_number = await provider.getBlockNumber()
    console.log(block_number)

    const account_balance = await provider.getBalance("0xCEE0683eFEa184dCae5F361721945DBe5cF210b6")
    console.log(account_balance)

    const Balance_in_ether = ethers.utils.formatUnits(account_balance)
    console.log("balance in ether is", Balance_in_ether)

}
main()
get_block_number()