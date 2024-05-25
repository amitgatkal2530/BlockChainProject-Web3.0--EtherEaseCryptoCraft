import React, { useEffect, useState } from 'react';
import { BsInfoCircle } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import Layout from "../components/Layouts/Layout";

const Market = () => {
  const [etherData, setEtherData] = useState(null);

  useEffect(() => {
    const fetchEtherData = async () => {
      try {
        const response = await fetch('API_URL_HERE');
        const data = await response.json();
        setEtherData(data);
      } catch (error) {
        console.error('Error fetching Ether data:', error);
      }
    };
    fetchEtherData();
  }, []);

  return (
    <Layout>
      <div className="gradient-bg-welcome flex flex-col items-center justify-center min-h-screen">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              color: '#FFFFFF',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Ether Market
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#FFFFFF', marginTop: '20px' }}>
            Welcome to the Ether Market page. Explore the live state of Ether, weekly graph, and Ether news.
          </p>
          {etherData && (
            <div style={{ marginTop: '20px', color: '#FFFFFF', fontSize: '1.1rem' }}>
              <p>Live Ether Price: {etherData.price}</p>
            </div>
          )}
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '40px', width: '100%' }}>
          <div style={{ width: '45%', padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' }}>Weekly Graph</h2>
            <p style={{ fontSize: '1rem', color: '#666666' }}>
              <a href="https://www.coindesk.com/price/ethereum/" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
                Display Daily Ether price trend here.
              </a>
            </p>
          </div>
          <div style={{ width: '45%', padding: '20px', backgroundColor: '#FFFFFF', borderRadius: '10px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333333' }}>Ether News</h2>
            <p style={{ fontSize: '1rem', color: '#666666' }}>
              <a href="https://cointelegraph.com/ethereum-price" target="_blank" rel="noopener noreferrer" style={{ color: '#007BFF' }}>
                Display latest Ether news articles here.
              </a>
            </p>
          </div>
        </div>

        <div
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#4E96DD',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <SiEthereum style={{ fontSize: '3rem', color: '#FFFFFF' }} />
            <BsInfoCircle style={{ fontSize: '3rem', color: '#FFFFFF' }} />
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#FFFFFF' }}>Ethereum</p>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default Market;