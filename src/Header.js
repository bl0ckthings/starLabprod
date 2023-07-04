import React, { useState } from 'react';
import styled from 'styled-components';
import logo from './img/logo.png';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: auto;
  width: 130px;
  margin-left: 4%;
  cursor: pointer;


  @media (max-width: 768px) {
    margin-left: 0;
    margin-bottom: 50px;
  }
`;

const Menu = styled.nav`
  text-align: center;
  flex-grow: 1;
  margin-bottom: 15px;
  margin-left: 35px;
  @media (max-width: 768px) { 
    margin-bottom: 50px;
  }
`;

const MenuItem = styled.a`
  margin: 0 25px;
  font-size: 26px;
  color: white;
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  text-decoration: ${props => (props.active ? 'underline' : 'none')};
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

const WalletButton = styled.button`
  background-color: white;
  border: 1px solid white;
  color: #323095;
  border-radius: 8px;
  padding: 15px 15px 15px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Text Me One', sans-serif;
  height: 50px;
  width: 180px;
  margin-right: 4%;
  cursor: pointer;


  @media (max-width: 768px) {
    align-self: center;
    margin-right: 0;
  }
  
`;
// TRIM ADDRESS
const shortAccount = (account) => {
  return account
    ? account.slice(0, 4) +
    '...' +
    account.slice(account.length - 4, account.length)
    : '';
};
// DISCONNECT METAMASK

const Header = ({ connectMetaMask, account, setAccount }) => {
  const [activePage, setActivePage] = useState('bridge');
  const shortAddress = shortAccount(account);

  const handleDisconnect = () => {
    if (window.ethereum) {
      window.ethereum.selectedAddress = null;
      setAccount('');
    }
  };
  const handleMenuItemClick = (page) => {
    setActivePage(page);
  };
  const handleConnectWallet = () => {
    connectMetaMask();
  };

  return (
    <HeaderContainer>
      <Logo src={logo} alt="Logo" />

      <Menu>
        {/* <MenuItem
          active={activePage === 'bridge'}
          onClick={() => handleMenuItemClick('bridge')}
        >
          Bridge
        </MenuItem> */}
        {/* <MenuItem
          active={activePage === 'get-gas'}
          onClick={() => handleMenuItemClick('get-gas')}
        >
          Get Gas
        </MenuItem>
        <MenuItem
          active={activePage === 'faq'}
          onClick={() => handleMenuItemClick('faq')}
        >
          FAQ
        </MenuItem> */}
      </Menu>
      {!account ? (
        <WalletButton onClick={handleConnectWallet}>Connect Wallet</WalletButton>
      ) : <WalletButton onClick={handleDisconnect}>{shortAddress}</WalletButton>
      }

    </HeaderContainer>
  );
};

export default Header;
