// Import the web3 library
const Web3 = require('web3');

// Initialize web3
const web3 = new Web3(Web3.givenProvider);

// Set the contract factory address
const nftFactoryAddress = '0x1aB14B36Ca49DA30985dAC3383f06525ad8A3F0B';

// Set the parameters for the new ERC721A contract
const tokenName = 'My NFT';
const tokenSymbol = 'MYNFT';
const maxItems = 100;
const mintPrice = web3.utils.toWei('0.01', 'ether');
const creator = '/* the address of the creator */';
const royaltyCut = 10;
const devCut = 10;
const baseTokenURI = 'https://ipfs.io/ipfs/Qmd5q3NXABeX7nG39QJ6W8qxvGQj6xJU6fnwU53W8gjKck/';

// Set the salt for the contract deployment
const salt = web3.utils.randomHex(32);

// Create a new instance of the NFTFactory contract
const nftFactoryContract = new web3.eth.Contract(
  [{"inputs":[{"internalType":"address","name":"treasuryAddress_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"enum NFTFactory.NFTContractType","name":"nftContractType","type":"uint8"}],"name":"NFTContractCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"controller_","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenSymbol_","type":"string"},{"internalType":"uint256","name":"maxItems_","type":"uint256"},{"internalType":"uint256","name":"mintPrice_","type":"uint256"},{"internalType":"address","name":"creator_","type":"address"},{"internalType":"uint256","name":"royaltyCut_","type":"uint256"},{"internalType":"uint256","name":"devCut_","type":"uint256"},{"internalType":"string","name":"baseTokenURI_","type":"string"}],"name":"createERC721A","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"pauseMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"controller_","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"devCut_","type":"uint256"}],"name":"setDevCut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"unpauseMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
 ,
  nftFactoryAddress
);

// Request user's accounts from their wallet
window.ethereum.request({ method: 'eth_requestAccounts' })
  .then((accounts) => {
    // Call the createERC721A function to create a new ERC721A contract
   // Call the createERC721A function to create a new ERC721A contract
nftFactoryContract.methods.createERC721A(
    tokenName,
    tokenSymbol,
    maxItems,
    mintPrice,
    creator,
    royaltyCut,
    devCut,
    baseTokenURI,
    salt
  ).send({
    from: walletAddress,
    gas: gasAmount
  }).then((receipt) => {
    console.log('Transaction receipt:', receipt);
  }).catch((error) => {
    console.error('Error creating ERC721A contract:', error);
  });
});