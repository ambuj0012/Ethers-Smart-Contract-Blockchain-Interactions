const { ethers } = require('ethers')
const fs = require('fs')
require('dotenv').config()



async function main() {
    const Provider = new ethers.providers.JsonRpcProvider(process.env.PROVIDER)
    const encrypJson = fs.readFileSync("./.encryptedKey.json", "utf8")
    let wallet = new ethers.Wallet.fromEncryptedJsonSync(encrypJson, process.env.PRIVATE_KEY_PASSWORD)
    wallet = await wallet.connect(Provider)
    const abi = fs.readFileSync('./contractinteraction_sol_wallet.abi', 'utf8')
    const binary = fs.readFileSync('./contractinteraction_sol_wallet.bin', 'utf8')
    const contractfactory = new ethers.ContractFactory(abi, binary, wallet)
    console.log("deploying your contract...")
    const contract = await contractfactory.deploy({ gasPrice: 1000000000, gasLimit: 3000000 }) // we can give gas limit/ gas price in override
    console.log(contract)
    console.log("contract deployed successfully")
}
main()