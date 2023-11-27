import Web3 from 'web3';

let web3;

if (typeof window.ethereum !== 'undefined') {
    web3 = new Web3(window.ethereum);
} else {
    console.error('Ethereum provider not detected. Install or activate MetaMask.');
    // You can also initialize Web3 with an Infura/RPC endpoint in case of no MetaMask
    // web3 = new Web3(new Web3.providers.HttpProvider(YOUR_INFURA_ENDPOINT));
}

export const connectWallet = async () => {
    if (!web3) return null;

    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return accounts[0];
};

export const getBalance = async (account) => {
    if (!web3 || !account) return null;

    const balance = await web3.eth.getBalance(account);
    return web3.utils.fromWei(balance, 'ether');
};

export const sendTransaction = async (toAddress, valueInEther) => {
    const accounts = await web3.eth.getAccounts();
    const sender = accounts[0];

    const valueInWei = web3.utils.toWei(valueInEther.toString(), 'ether');

    const transactionHash = await web3.eth.sendTransaction({
        from: sender,
        to: toAddress,
        value: valueInWei,
    });

    return transactionHash;
};
