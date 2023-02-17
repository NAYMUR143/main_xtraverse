const IPFS = require('ipfs-core');

async function displayNFTImage(ipfsHash) {
  const ipfs = await IPFS.create({ url: 'https://ipfs.infura.io:5001' });
  const stream = ipfs.cat(ipfsHash);
  
  let data = '';
  for await (const chunk of stream) {
    data += chunk;
  }

  const image = new Image();
  image.src = `data:image/png;base64,${btoa(data)}`;
  document.body.appendChild(image);
}

// Example usage
const nftHash = 'QmX9X77aZjQ2ZgJhZbMVEPHTCWKXXbYGMfMrya1JMRDdj9';
displayNFTImage(nftHash);