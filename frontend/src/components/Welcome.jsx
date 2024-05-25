import React from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import Layout from './Layouts/Layout';

const Welcome = () => {
  return (
    <Layout>
      <div className="gradient-bg-welcome flex flex-col items-center justify-center h-screen">
        <div className="max-w-lg p-8 text-center">
          <h1 className="text-3xl sm:text-5xl text-white font-bold mb-6">
            Welcome to Ether Wallet
          </h1>
          <p className="text-lg text-white font-light mb-8">
            Your Trusted Gateway to the Crypto World
          </p>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-12">
            <div className="bg-blue-500 rounded-lg p-4 flex items-center justify-center text-white">
              <SiEthereum className="text-4xl mr-2" />
              <span className="text-xl font-bold">Ethereum</span>
            </div>
            <div className="bg-green-500 rounded-lg p-4 flex items-center justify-center text-white">
              <BsInfoCircle className="text-4xl mr-2" />
              <span className="text-xl font-bold">Security</span>
            </div>
            <div className="bg-purple-500 rounded-lg p-4 flex items-center justify-center text-white">
              <span className="text-4xl">🔒</span>
              <span className="text-xl font-bold">Reliability</span>
            </div>
            <div className="bg-yellow-500 rounded-lg p-4 flex items-center justify-center text-white">
              <span className="text-4xl">💡</span>
              <span className="text-xl font-bold">Web 3.0</span>
            </div>
          </div>
          <p className="text-center text-white mb-8">
            Explore the crypto world. Buy and sell cryptocurrencies easily on Krypto.
          </p>
          <div className="w-full sm:w-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-white">
              <h2 className="text-xl font-bold mb-2">24/7 Support</h2>
              <p className="text-sm">Get assistance anytime, anywhere.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-white">
              <h2 className="text-xl font-bold mb-2">User-Friendly Interface</h2>
              <p className="text-sm">Easy navigation for seamless transactions.</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-white">
              <h2 className="text-xl font-bold mb-2">Secure Transactions</h2>
              <p className="text-sm">Protecting your assets is our priority.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;