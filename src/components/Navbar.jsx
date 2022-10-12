import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';


import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import {SwapWidget } from '@uniswap/widgets'


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import icon from '../images/cryptocurrency.png';
// import { Modal } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const infuraId = '6b1c27a439bc4a09b6cedfd1d501c07d';
const JsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
const JsonRpcProvider = new providers.JsonRpcProvider(JsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(JsonRpcProvider);



const jsonRpcUrlMap = { 
  1: ['https://mainnet.infura.io/v3/6b1c27a439bc4a09b6cedfd1d501c07d>'], 
  3: ['https://ropsten.infura.io/v3/6b1c27a439bc4a09b6cedfd1d501c07d']
}



const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [account, setAccount] = useState({
    address: '',
    provider: provider
  })

  console.log(account)

  async function connectWallet() {
    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      const address = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      setAccount({
        address: address[0],
        provider: ethereumProvider
      })
    }
  }



  const [data, setdata] = useState({
    address: '',
    Balance: null,
  });
  // Button handler button for handling a
  // request event for metamask
    // Function for getting handling all events
    const accountChangeHandler = (account) => {
      // Setting an address data
      setdata({
        address: account,
      });
      // Setting a balance
      getbalance(account);
    };
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert('install metamask extension!!');
    }
  };
  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        // setdata({
        //   Balance: ethers.utils.formatEther(balance),
        // });
      });
  };
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
    <button onClick={() => connectWallet()}>Connect Wallet</button>
    </Typography>
  
      <SwapWidget provider={account.provider} jsonRpcUrlMap={jsonRpcUrlMap} />


  </Box>
</Modal>



      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">Cryptoverse</Link></Typography.Title>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu theme="dark">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <span onClick={handleOpen}>Exchanges</span>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
        <span onClick={btnhandler}>Connect to MetaMask</span>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
