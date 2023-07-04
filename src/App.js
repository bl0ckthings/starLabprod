import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import BridgePage from './Bridge';
import detectEthereumProvider from '@metamask/detect-provider';
import * as ethers from "ethers";
import chains from './utils/chains.json'
import { Toaster } from "react-hot-toast";
import Dropdown from './dropdown';





function App() {
  const [account, setAccount] = useState('');
  const [ethereumProvider, setEthereumProvider] = useState(null);

  // SET CURRENT PROVIDER


  // Switch chains depending on the chosen blockchain.
  const switchChain = async (ethereumProvider, chainData) => {
    try {
      await ethereumProvider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: chainData.chainId }],
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await ethereumProvider.request({
            method: 'wallet_addEthereumChain',
            params: [chainData],
          });
        } catch (addError) {
          console.error(addError);
        }
      } else {
        console.error(switchError);
      }
    }
  };

  // Connect Metamask button
  const connectMetaMask = async () => {

    const ethereumProvider = await detectEthereumProvider();
    setEthereumProvider(ethereumProvider);



    if (ethereumProvider) {
      try {
        const accounts = await ethereumProvider.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        await switchChain(ethereumProvider, chains.zkSyncEra);
      } catch (error) {
        console.error(error);
      }
    } else {
      setAccount('MetaMask not detected');
    }
  };

  // HANDLE WHEN USER CHANGES METAMASK ACCOUNT
  const handleAccountChange = async (accounts) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    }
  };

  useEffect(() => {
    const init = async () => {
      const ethereumProvider = await detectEthereumProvider();
      if (ethereumProvider) {
        ethereumProvider.on('accountsChanged', handleAccountChange);
        connectMetaMask(ethereumProvider);
      } else {
        setAccount('MetaMask not detected');
      }
    };
    init();

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountChange);
      }
    };
  }, []);


  return (
    <div className="App">
      <Header account={account} setAccount={setAccount} connectMetaMask={connectMetaMask} />

      <BridgePage account={account} ethereumProvider={ethereumProvider} switchChain={switchChain} />


      <Toaster
        toastOptions={{
          className: '',
          style: {
            background: 'linear-gradient(0deg, #1A2B68, #323095)',
            border: '1px solid white',
            padding: '16px',
            color: 'white',
            marginRight: '30px'
          },
        }} />


    </div>
  );
}

export default App;
