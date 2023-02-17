const stripe = Stripe('YOUR_STRIPE_PUBLISHABLE_KEY');
const web3 = new Web3(window.ethereum);

// Your contract and transaction details
const contractAddress = '0x1aB14B36Ca49DA30985dAC3383f06525ad8A3F0B';
const contractABI = [{"inputs":[{"internalType":"address","name":"treasuryAddress_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"nftContract","type":"address"},{"indexed":true,"internalType":"enum NFTFactory.NFTContractType","name":"nftContractType","type":"uint8"}],"name":"NFTContractCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"controller_","type":"address"}],"name":"addController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"tokenName_","type":"string"},{"internalType":"string","name":"tokenSymbol_","type":"string"},{"internalType":"uint256","name":"maxItems_","type":"uint256"},{"internalType":"uint256","name":"mintPrice_","type":"uint256"},{"internalType":"address","name":"creator_","type":"address"},{"internalType":"uint256","name":"royaltyCut_","type":"uint256"},{"internalType":"uint256","name":"devCut_","type":"uint256"},{"internalType":"string","name":"baseTokenURI_","type":"string"}],"name":"createERC721A","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"pauseMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"address","name":"controller_","type":"address"}],"name":"removeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"},{"internalType":"uint256","name":"devCut_","type":"uint256"}],"name":"setDevCut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"treasuryAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"unpauseMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"nftContract","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]; // Your contract ABI
const nftPrice = 1; // Price of the NFT in USD

// Handle payment on button click
document.getElementById('buy-now').addEventListener('click', async () => {
  // Get the user's Ethereum address
  const accounts = await web3.eth.requestAccounts();
  const userAddress = accounts[0];

  // Convert the USD price to the equivalent ETH amount
  const ethPrice = await fetch('https://api.coinbase.com/v2/exchange-rates?currency=ETH')
    .then((res) => res.json())
    .then((data) => nftPrice / parseFloat(data.data.rates.USD));

  // Create a Stripe Checkout session and handle payment
  const session = await fetch('/create-checkout-session', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      amount: nftPrice * 100, // Convert to cents for Stripe
      successUrl: `${window.location.origin}/success.html?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/cancel.html`,
    }),
  })
    .then((res) => res.json())
    .then((data) => data.sessionId);

  stripe.redirectToCheckout({ sessionId: session })
    .then(async (result) => {
      // Handle payment failure
    })
    .catch(async (err) => {
      // Handle payment failure
    });

  // Once payment is successful, mint the NFT to the user's address
  const contractInstance = new web3.eth.Contract(contractABI, contractAddress);
  await contractInstance.methods.mintNFT(userAddress).send({
    from: userAddress,
    value: web3.utils.toWei(ethPrice.toString(), 'ether'),
  });
});
