const Web3 = require('web3');
const fetch = require('node-fetch');

const web3 = new Web3(new Web3.providers.HttpProvider('https://ipfs.io/ipfs/Qmd5q3NXABeX7nG39QJ6W8qxvGQj6xJU6fnwU53W8gjKck/'));

async function getNFTMetadata(contractAddress, tokenId) {
  const contract = new web3.eth.Contract(
    [{
      "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
      "name": "tokenURI",
      "outputs": [{"internalType": "string", "name": "", "type": "string"}],
      "stateMutability": "view",
      "type": "function"
    }],
    contractAddress
  );
  
  const metadataUrl = await contract.methods.tokenURI(tokenId).call();
  const metadataResponse = await fetch(metadataUrl);
  const metadata = await metadataResponse.json();

  return metadata;
}

module.exports = {
  getNFTMetadata,
};

const { getNFTMetadata } = require('./nft-metadata');

const contractAddress = '0x1aB14B36Ca49DA30985dAC3383f06525ad8A3F0B';
const tokenId = 1;

getNFTMetadata(contractAddress, tokenId)
  .then((metadata) => {
    console.log(metadata);
  })
  .catch((error) => {
    console.error(error);
  });
