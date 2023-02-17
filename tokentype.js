// Import the required packages and the API library
const Web3 = require('web3');
const API = require('./api');

// Set the Infura endpoint URL
const endpoint = 'https://goerli.infura.io/v3/eaeaa01808204e0183502323ac8854df';

// Instantiate a new Web3 object using the Infura endpoint
const web3 = new Web3(endpoint);

// Create a new instance of the API class, passing in the web3 object
const api = new API({ eth: web3 });

// Get references to the HTML elements for the token type selector and the button
const tokenTypeSelector = document.getElementById('token-type');
const submitButton = document.getElementById('submit-button');

// Add an event listener to the button to call the function when it's clicked
submitButton.addEventListener('click', getTokenType);

// Define the getTokenType function
function getTokenType() {
  // Get the value of the token type selector
  const tokenType = tokenTypeSelector.value;

  // If the user selects ERC-721A, call the ERC721AToken function on the contract
  if (tokenType === 'erc721a') {
    api.contract.methods.ERC721AToken().call()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // If the user selects ERC-1155, call the ERC1155Token function on the contract
  else if (tokenType === 'erc1155') {
    api.contract.methods.ERC1155Token().call()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  
  // If the user selects an invalid token type, show an error message
  else {
    console.error('Invalid token type selected');
  }
}
