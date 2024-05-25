
import React from 'react';
import Layout from "../components/Layouts/Layout";
import { motion } from "framer-motion";

const NFT = () => {
  // Sample data for the top row of cards
  const topRowCards = [
    {
      id: 1,
      title: "What is an NFT?",
      description: "Learn about Non-Fungible Tokens and how they work.",
      imageUrl: "https://via.placeholder.com/300"
    },
    {
      id: 2,
      title: "How to buy an NFT",
      description: "Step-by-step guide on purchasing your first NFT.",
      imageUrl: "https://via.placeholder.com/300"
    },
    {
      id: 3,
      title: "How to stay protected in web3",
      description: "Tips and best practices to ensure security in the world of Web3.",
      imageUrl: "https://via.placeholder.com/300"
    }
  ];

  // Sample NFT data categorized
  const nftCategories = {
    "Notable Collections": [
      {
        id: 1,
        name: "Persona",
        imageUrl: "https://via.placeholder.com/300",
        description: "Timefall Valley is a small city that has always remained isolated from the outside world.",
        price: 0.23
      },
      {
        id: 2,
        name: "Early Retired Cats Club ",
        imageUrl: "https://via.placeholder.com/300",
        description: "Cuteness crawling up your hooman soul Ever seen Meows this cute? Explore the world of 1,930 Cats with ERCC.",
        
        price: 0.615
      },
      {
        id: 3,
        name: "Incomplete Control by Tyler Hobbs",
        imageUrl: "https://via.placeholder.com/300",
        description: "Heritage Art Blocks Collection: Playground",
        price: 0.3
      },
      {
        id: 4,
        name: " A.N.I.M.O",
        imageUrl: "https://via.placeholder.com/300",
        description: "Get the parts for your dream Mech in ANIMO Stars Arena",
        price: 0.11
      },
      {
        id: 5,
        name: "Mochimons #1137",
        imageUrl: "https://via.placeholder.com/300",
        description: "Mochimons is a collection of 3,333 cute cat NFTs exclusively on Base chain.",
        price: 0.38
      },
      // Add more NFTs for "Notable Collections" category if needed
    ],

    "Trending in Art": [
      {
        id: 6,
        name: "NFT 1",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 1",
        price: 0.1
      },
      {
        id: 6,
        name: "NFT 2",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 2",
        price: 0.2
      },
      {
        id: 8,
        name: "NFT 3",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 3",
        price: 0.3
      },
      {
        id: 9,
        name: "NFT 4",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 4",
        price: 0.4
      },
      {
        id: 10,
        name: "NFT 5",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 5",
        price: 0.5
      },
      // Add more NFTs for "Notable Collections" category if needed
    ],

    "Trending in Music": [
      {
        id: 1,
        name: "NFT 1",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 1",
        price: 0.1
      },
      {
        id: 2,
        name: "NFT 2",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 2",
        price: 0.2
      },
      {
        id: 3,
        name: "NFT 3",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 3",
        price: 0.3
      },
      {
        id: 4,
        name: "NFT 4",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 4",
        price: 0.4
      },
      {
        id: 5,
        name: "NFT 5",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 5",
        price: 0.5
      },
      // Add more NFTs for "Notable Collections" category if needed
    ],

    "Trending in Photography": [
      {
        id: 1,
        name: "NFT 1",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 1",
        price: 0.1
      },
      {
        id: 2,
        name: "NFT 2",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 2",
        price: 0.2
      },
      {
        id: 3,
        name: "NFT 3",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 3",
        price: 0.3
      },
      {
        id: 4,
        name: "NFT 4",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 4",
        price: 0.4
      },
      {
        id: 5,
        name: "NFT 5",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 5",
        price: 0.5
      },
      // Add more NFTs for "Notable Collections" category if needed
    ],

    "Top Collector Buys Today": [
      {
        id: 1,
        name: "NFT 1",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 1",
        price: 0.1
      },
      {
        id: 2,
        name: "NFT 2",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 2",
        price: 0.2
      },
      {
        id: 3,
        name: "NFT 3",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 3",
        price: 0.3
      },
      {
        id: 4,
        name: "NFT 4",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 4",
        price: 0.4
      },
      {
        id: 5,
        name: "NFT 5",
        imageUrl: "https://via.placeholder.com/300",
        description: "Description of NFT 5",
        price: 0.5
      },
      // Add more NFTs for "Notable Collections" category if needed
    ],

    
   
  };

  return (
    <Layout>
      <div className="gradient-bg-welcome flex w-full justify-center items-center">
        <div className="flex flex-col items-start justify-between md:p-40 py-12 px-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl text-white text-gradient py-1"
          >
          Explore NFTs

          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 0.5 }}
            className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base"
          >
            Explore and interact with  Limited NFTs here.
          </motion.p>

          {/* Top row of cards */}
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
          >
            {topRowCards.map(card => (
              <motion.div 
                key={card.id} 
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-4"
              >
                <img src={card.imageUrl} alt={card.title} className="w-full h-48 object-cover rounded-md mb-4" />
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-sm text-gray-600">{card.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    Learn more
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Render NFTs by category */}
          {Object.entries(nftCategories).map(([category, nfts], index) => (
            <div key={category} className={`mt-${index === 0 ? 8 : 12}`}>
              <h2 className="text-xl font-semibold text-white mb-4">{category}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {nfts.map(nft => (
                  <motion.div 
                    key={nft.id} 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg shadow-lg p-4"
                  >
                    <img src={nft.imageUrl} alt={nft.name} className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800">{nft.name}</h3>
                    <p className="text-sm text-gray-600">{nft.description}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-gray-600 text-sm">{nft.price} ETH</span>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                        Buy
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Add margin between rows */}
              <div className="mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NFT;