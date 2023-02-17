// Check if MetaMask is installed
if (typeof web3 === 'undefined') {
  // MetaMask is not installed
  alert('Please install MetaMask to use this feature');
} else {
  // MetaMask is installed
  // Get the user's Ethereum address
  web3.eth.getAccounts((error, accounts) => {
    if (error) {
      console.error(error);
      alert('There was an error getting your address');
    } else if (accounts.length === 0) {
      alert('Please login to MetaMask to use this feature');
    } else {
      const userAddress = accounts[0];
      
      // Get the amount of Ether to send from the user
const etherAmount = prompt('Enter the amount of Ether to send:');

// Prompt the user to sign a transaction
web3.eth.sendTransaction({
  from: userAddress,
  to: /* your contract address */0x1aB14B36Ca49DA30985dAC3383f06525ad8A3F0B,
  value: web3.utils.toWei(etherAmount, 'ether')
}, (error, transactionHash) => {
  if (error) {
    console.error(error);
    alert('There was an error sending your transaction');
  } else {
    // Transaction was successful
    alert('Your transaction was successful. Transaction hash: ' + transactionHash);
  }
});
    }
  });
} 