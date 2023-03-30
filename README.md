# Ethers-Smart-Contract-Interactions
This project involves blockchain interaction, smart contract deployment, and smart contract interaction.

All about Project in Detail

1. NODEJS INSTALLATION
   a. Download and Install node js from its website prefer downloading LTS version as the latest one may contaion some bugs
   b. after installation you should check whether it is installed or not by typing- node --version, in the vs code terminal

2. INSTALL EXTENSTION SOLIDITY+HARDHAT FOR .sol FILE
   a. this will enable code highlighter for our .sol file and it would be more readable file 

3. COMPILING OUR SOLIDITY CODE 
   a. solidity code cannot be compiled by the vs code so we need to download a compiler for solidity 
   b. we need to install solc js in order to compile our .sol file
   c. write- npm install solc , in terminal and it will install solc js (you could check solc version using solcjs --version command)
   d. this will add 2 folders in our main folder (node_modules , package.json or it may also add package-lock.json). package.json tells about our project all the external packages we install will be displayed in package.json with their version
   e. to compile the solidity file we need to run the following command on terminal - yarn solcjs --bin --abi --include-path node_module/ --base-path . -o . filename.sol 
   f. this command is very large and it is very inconvinient to type it again and agin so we will use package.json to simplify our work 
   g. open package.json file and write the following code-
       "scripts": {
          "compile": "npm solcjs --bin --abi --include-path node_module/ --base-path . -o ."
        }
    
    now the terminal will auto replace " compile  " tag with the above lage code 
    to compile .sol file type " npm compile filename.sol "  to compile the .sol file. This will generate .abi and .bin files of the .sol file (we require only these two files in our script)

    NOT - The .bin and .abi files generated after compiling our smart contract is also uploaded

4. GANACHE i.e PRIVATE BLOCKCHAIN NETWORK CREATION ON OUR COMPUTER
    a. Download the ganache application
    b. Install and open it 
    c. When you open the ganache application you will be offered two choices 
           1. quickstart 
           2. new workspace
        we will use quickstart
    d. What is ganache? 
       it is a application which creates a fake blockchain in your pc the fake blockchain will have all the attributes of a real blockchain we will use this to test and practice our deployment of smart contract
       it gives 10 accounts with address, priate key and 100 ethers each
    
  [NOTE - RPC PROVIDER COMES WITH VARIOUS JSONRPC COMMANDS WHICH WE CAN SEE IN ETHEREUM JSON RPC SPECIFICATION 
        WE CAN FETCH PROPERTIES OF THE BLOCKCHAIN USING THESE LIKE BLOCK NUMBER ETC]
    
5. ETHER.JS 
    a. Now we need to install ethers.js library to interact with our blockchain
    b. our blockchain network is interacted/connected with our code/operations using ethers.js library
    c. install ethers.js by writing npm install --save ethers (this will install the ethers library in our project notice there will be a ethers tag in the dependecies section of the package.json file)
    d. import ethers library in .js file using - const ethers = require('ethers')

6. INSTALLING fs 
    a. to read .abi and .bin files our script need fs library 
    b. write folllowing command to install fs package - npm install fs
    c. to import fs in our .js file write - const fs = require('fs')

7. CONNECTION WITH TO OUR BLOCKCHAIN (FETCHING INFORMATION FROM BLOCKCHAIN) [refer to connection.js file]
    a. We need  2 info to make connection with our blockchain 
        1. RPC URL 
        2. PRIVATE KEY OF ONE OF THE ACCOUNTS IN BLOCKCHAIN (basically we an participate in a blockchain only if we have account or we are one of the nodes of the blockchain network) (NOTE - private key of a account is a very confidential entitiy of a account. having a private key of a ccount means you have access to the funds in the account hence it should not be written directly on the script. initially for the simpilicity and since we are working in a fake blockchain we will write the private key in our .js file but i will also upload a file named security.txt which will teach us ways to secure our private key)
    b. we will create a async function which will declare these two variables
    c. to declare rpc url we use " ethers.providers.JsonRpcProvider() " tag and in the argument we will give rpc url of our blockchain in string format 
    d. In our ganache blockchain at the top we have a RPC Server below which we have rpc url 
    e. Then we will create a wallet using " ethers.Wallet() " we pass two arguments in this first one will be the private key of the account in string format and other will be our provider variable
    f. code for the same is attatched in file named connection.js
    g. Now our js file will be connected to the blockchain and we can fetch allowed info about our blockchain like block number and account balance , ETC (code for the same is given in the connection.js file)
    h. now we have written our code. we will call the function required and run the .js file
    i. to run the file type - node filename.js
    
    [NOTE- THE PROCESS IS VERY SIMPLE AND EASY TO UNDERSTAND, YOU JUST HAVE TO LEARN TO USE ETHERS.JS LIBRARY]

8. DEPLOYING A SMART CONTRACT IN BLOCKCHAIN USING ETHERS.JS (refer to file deploy.js)
    a. import ethers library
    b. import fs package
    c. in order to deploy our contract we need .abi , .bin and wallet 
    d. create a const containing provider i.e rpc url
    e. create a wallet using ethers.wallet() (in similar way as we did in connection.js)
    f. create a const abi which will contain abi of our smart contract we will use (fs.readFileSync())
    g. create a const binary which will have binary data of our contract we will use (fs.readFileSync())
    h. create a const contract factory which will contain all the required data to deploy the smart contract (ethers.ContractFactory(abi, binary, wallet))
    i. now we will create a constant with deploy tag (this will deploy our contract) (we will pass contract factory variable and will use .deploy tag of ethers library to deploy the contract in blockchain)
    j. write following commanf in terminal to run the code and deploy the contract - node file name

    [NOTE - YOU CAN CHECK THE TRANSACTION COUNT IN YOUR GANACHE TO VERIFY]

9. INTERACTING WITH OUR SMART CONTRACT [refer to contractinteraction.js]
    a. import ether library
    b. import fs package
    c. create a contract address (give address of your smart contract in this) [you can gey address of your contract in transaction section of ganache]
    d. create a const which stores .abi of the smart contract (.abi file contains all the functions of your smart contract)
    e. create a const which saves the rpc provider url of blockchain
    f. create a wallet const which will act as a signer
    g. create a wallet instance which have the details required to interact with the smart Contract (contract address, abi and signer(wallet))
    h. now create a async function which will contain all the function you need to call from the smart contract
    g. now you can call any function from the contract by its name (EX- const contractname = await walletcontract.name()  [this is a const names contractname which will store the name of the contract])
    h. Explanation - There will be a function named name in our smart contract we will all that function by that name 
    i. for any function that changes the state of the contract variables (EX like send ether function, which changes the funds of the contract or any function that changes variable) there is a transaction done in the blockchain
    j. for any function that requires input we can pass the same as arguments of the function please refer to the code in contractinteraction.js



NOTE - usage of .env file and private key encryption is explained in seperate file named security.txt 
