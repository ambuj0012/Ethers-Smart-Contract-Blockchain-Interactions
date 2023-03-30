const ethers = require('ethers')
const fs = require('fs')
// we are importing our .env file
require("dotenv").config()

const contractaddress = process.env.CONTRACT_ADDRESS
const walletabi = fs.readFileSync('./contractinteraction_sol_wallet.abi', 'utf8')
const Provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER)  // process.env.PROVIDER is the .env replacement of our private key
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, Provider) // this is signer

const contractinteraction = async () => {

    // in this function we will interact with our smart contract we will perform both read and write function in the contract
    const walletcontract = new ethers.Contract(contractaddress, walletabi, wallet,)

    // we have created a contract wallet instance we direct our script towards the contract deployed in ganache network

    // now we will various variables which will call our functions from the contract 
    const contractname = await walletcontract.name() // contract class comes with all the functions defined in contract abi
    console.log("name of contract", contractname)

    const numvalue = await walletcontract.get_value()
    console.log("value of num", numvalue.toString())

    const setNumber = await walletcontract.set_num("9")
    console.log(numvalue.toString())  // write function

    const accountBalance = await walletcontract.account_balance(process.env.ACCOUNT_ADDRESS)
    console.log(accountBalance.toString())

    const sendEther = await walletcontract.send_ether_contract({ value: ethers.utils.parseEther("3") }) // value: ethers.utils.parseEther("3") is used to give the amount of ether you need to send to the contract
    const balanceofcontract = await walletcontract.contract_balance()
    const BALANCEOFCONTRACT = ethers.utils.formatUnits(balanceofcontract)  // this converst the  number/wei into ethers
    console.log("balance of contract", BALANCEOFCONTRACT)

}
contractinteraction()
