import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { Web3Provider } from "@ethersproject/providers";
export const TransactionContext = React.createContext();
const { ethereum } = window;

// Function to initialize Ethereum contract
const getEthereumContract = () => {
  if (!ethereum) {
    throw new Error("No ethereum object");
  }

  const provider = new Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);
  console.log({
    provider,
    signer,
    transactionContract
  });

  return transactionContract; // Return the contract instance
}

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setcurrentAccount] = useState("");
 const [formData, setformData] = useState({ addressTo: "", amount: "0.01", keyword: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(null);
  const handleChange = (e, name) => {
    //console.log("Value:", e.target.value);
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

     
  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();

        const availableTransactions = await transactionsContract.getAllTransactions();

        const structuredTransactions = availableTransactions.map((transaction) => ({
          addressTo: transaction.receiver,
          addressFrom: transaction.sender,
          timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
          message: transaction.message,
          keyword: transaction.keyword,
          amount: parseInt(transaction.amount._hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
        console.log(availableTransactions)
      } else {
        console.log("Ethereum is not present");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const checkIfwalletIsConnected = async () => {
    try {
      if (!ethereum) {
        return alert("Please install metamask");
      }
      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts);
      if (accounts.length) {
        setcurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error) {
      console.log(error);
      throw new Error("No ethereum object");
    }
  };

  const checkIfTransactionsExists = async () => {
    try {
      if (ethereum) {
        const transactionsContract = getEthereumContract();
        const transactionsCount  = await transactionsContract.getTransactionCount();
       
        window.localStorage.setItem("transactionCount", transactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };



  const connectWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please install MetaMask.");
      }
      // Requesting accounts from MetaMask
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      
      // Check if the user has at least two accounts
      // if (accounts.length < 2) {
      //   // If less than two accounts are available, display an alert
      //   return alert("Please make sure you have multiple accounts in MetaMask.");
      // }
      
      // Prompt the user to select an account from the list of available accounts
      const selectedAccount = prompt("Select an account:", accounts.join(", "));
      
      // Check if the user has selected an account
      if (!selectedAccount) {
        return alert("Please select an account.");
      }
      
      // Set the selected account as the current account
      setcurrentAccount(selectedAccount);
      
      // Reload the page to reflect the changes
      window.location.reload();
    } catch (error) {
      console.log(error);
      throw new Error("Error connecting wallet");
    }
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum) throw new Error("MetaMask is not installed. Please install MetaMask.");
      const { addressTo, amount, keyword, message } = formData;
      if (!amount) throw new Error("Amount is not specified.");
      console.log("Address to:", addressTo);
      if (!ethers.utils.isAddress(addressTo)) throw new Error("The recipient address is invalid.");
  
      const transactionContract = getEthereumContract();

      const parsedAmount = ethers.utils.parseEther(amount);
  
    await ethereum.request({
        method: "eth_sendTransaction",
        params: [{
          from: currentAccount,
          to: addressTo,
          gas: "0x5208",
          value: parsedAmount._hex,
        }],
      });
       
       
      const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword)

      setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        console.log(`Success - ${transactionHash.hash}`);
        setIsLoading(false);

        const transactionsCount = await transactionContract.getTransactionCount();
         
        setTransactionCount(transactionsCount.toNumber());
        //window.location.reload();
        

      // Additional logic for sending the transaction
    } catch (error) {
      console.error(error);
      alert(error.message); // Display the specific error message
    }
  };

  const disconnectWallet = async () => {
    try {
      setcurrentAccount(""); // Clear the currentAccount state variable
      // Additional logic for disconnecting wallet (if needed)
    } catch (error) {
      console.log(error);
      // Handle error if any
    }
  };


  const fetchBalance = async () => {
   
    if (!currentAccount) return; // If no account is connected, return
  
    try {
      const provider = window.ethereum;
      console.log('Fetching balance for account:', currentAccount);
      const balance = await provider.request({
        method: 'eth_getBalance',
        params: [currentAccount, 'latest']
      });
      console.log('Raw balance:', balance);
      // Convert balance from Wei to Ether
      const etherBalance = parseFloat(window.ethers.utils.formatEther(balance));
      console.log('Formatted balance:', etherBalance);
      setBalance(etherBalance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };
  
  useEffect(() => {
    checkIfwalletIsConnected();
    checkIfTransactionsExists();
    fetchBalance();
     //sendTransaction();
    //getEthereumContract();
   
   
  }, []);

  return (
    <TransactionContext.Provider value={{ connectWallet, currentAccount, formData,  handleChange, sendTransaction,transactions,disconnectWallet,balance  }}>
      {children}
    </TransactionContext.Provider>
  );
}

