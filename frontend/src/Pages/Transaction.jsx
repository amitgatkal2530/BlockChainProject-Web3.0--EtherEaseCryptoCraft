import React, { useContext, useState, useEffect } from 'react';
import { TransactionContext } from '../context/TransactionContext';
import Layout from "../components/Layouts/Layout";
import { shortenAddress } from '../utils/shortenAddress';

// Function to filter transactions based on time period
const filterTransactionsByTime = (transactions, timePeriod) => {
  const now = new Date();
  switch (timePeriod) {
    case 'today':
      return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.timestamp);
        return transactionDate.toDateString() === now.toDateString();
      });
    case 'week':
      const lastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
      return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.timestamp);
        return transactionDate > lastWeek;
      });
    case 'month':
      const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      return transactions.filter(transaction => {
        const transactionDate = new Date(transaction.timestamp);
        return transactionDate > lastMonth;
      });
    case 'all':
    default:
      return transactions;
  }
}

const CurrentAddress = ({ currentAccount, transactions, timePeriod }) => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  // Function to calculate total number of transactions
  const totalTransactions = () => {
    const filteredTransactions = filterTransactionsByTime(transactions, timePeriod);
    return filteredTransactions.length;
  }

  return (
    <div className="absolute top-4 right-4 p-4 bg-gray-800 rounded-lg shadow-lg text-white">
      <p className="text-lg">Current Address:</p>
      <p className="text-sm">{currentAccount}</p>
      <p className="text-xs mt-2">Current Time: {currentDateTime.toLocaleString()}</p>
      <p className="text-xs mt-2">Total Transactions: {totalTransactions()}</p>
    </div>
  );
};

const Transaction = () => {
  const { currentAccount, transactions } = useContext(TransactionContext);
  const [timePeriod, setTimePeriod] = useState('all');

  // Function to handle time period change
  const handleTimePeriodChange = (newTimePeriod) => {
    setTimePeriod(newTimePeriod);
  }

  return (
    <Layout>
      <div className="relative gradient-bg-welcome flex flex-col items-center justify-center min-h-screen">
        <h3 className="text-white text-3xl text-center my-2">Latest Transactions</h3>
        {currentAccount && <CurrentAddress currentAccount={currentAccount} transactions={transactions} timePeriod={timePeriod} />}
        <div className="flex justify-center my-2">
          <button className={`mx-2 px-4 py-2 rounded ${timePeriod === 'today' ? 'bg-blue-500 text-white' : 'text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'}`} onClick={() => handleTimePeriodChange('today')}>Today</button>
          <button className={`mx-2 px-4 py-2 rounded ${timePeriod === 'week' ? 'bg-blue-500 text-white' : 'text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'}`} onClick={() => handleTimePeriodChange('week')}>This Week</button>
          <button className={`mx-2 px-4 py-2 rounded ${timePeriod === 'month' ? 'bg-blue-500 text-white' : 'text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'}`} onClick={() => handleTimePeriodChange('month')}>This Month</button>
          <button className={`mx-2 px-4 py-2 rounded ${timePeriod === 'all' ? 'bg-blue-500 text-white' : 'text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white'}`} onClick={() => handleTimePeriodChange('all')}>All Transactions</button>
        </div>
        <div className="overflow-x-auto mt-4">
          {currentAccount ? (
            <table className="text-white table-auto mx-auto border-collapse border border-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-gray-800 text-lg">
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">From Account</th>
                  <th className="px-6 py-4">To Account</th>
                  <th className="px-6 py-4">Amount</th>
                  <th className="px-6 py-4">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filterTransactionsByTime(transactions, timePeriod).reverse().map((transaction, index) => (
                  <tr key={index} className="text-center">
                    <td className="px-6 py-4">{new Date(transaction.timestamp).toLocaleString()}</td>
                    <td className="px-6 py-4">{shortenAddress(transaction.addressFrom)}</td>
                    <td className="px-6 py-4">{shortenAddress(transaction.addressTo)}</td>
                    <td className="px-6 py-4">{transaction.amount} ETH</td>
                    <td className="px-6 py-4">{transaction.message || '-'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <h3 className="text-white text-3xl text-center my-2">Connect Your Account To See The Latest Transactions</h3>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Transaction;