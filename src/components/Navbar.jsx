import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined,AreaChartOutlined } from '@ant-design/icons';


import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import {SwapWidget } from '@uniswap/widgets'
import BinanceWidget from './BinanceWidget'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import icon from '../images/cryptocurrency.png';

var request = require('request');

var headers = {
	'Content-Type': 'application/json'
};


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};


var dataString = '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",true], "id":1}';

var options = {
	url: `https://mainnet.infura.io/v3/6b1c27a439bc4a09b6cedfd1d501c07d`,
	method: 'POST',
	headers: headers,
	body: dataString,
};


function callback(error, response, body) {
  var obj;
	if (!error && response.statusCode == 200) {
		var json = response.body;
		obj = JSON.parse(json);
		console.log(obj)
  
	}
  return obj
}

request(options, callback)


const infuraId = '6b1c27a439bc4a09b6cedfd1d501c07d';
const JsonRpcEndpoint = `https://mainnet.infura.io/v3/${infuraId}`;
const JsonRpcProvider = new providers.JsonRpcProvider(JsonRpcEndpoint);
const provider = new ethers.providers.Web3Provider(JsonRpcProvider);



const jsonRpcUrlMap = { 
  1: ['https://mainnet.infura.io/v3/6b1c27a439bc4a09b6cedfd1d501c07d>'], 
  2: ['https://rinkeby.infura.io/v3/6b1c27a439bc4a09b6cedfd1d501c07d'],
  3: ['https://ropsten.infura.io/v3/6b1c27a439bc4a09b6cedfd1d501c07d']
}



const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const [buy, setBuy] = React.useState(false);
  const handleOpenBuy = () => setBuy(true);
  const handleCloseBuy= () => setBuy(false);


  const [account, setAccount] = useState({
    address: '',
    balance:'',
    provider: provider
  })



  async function connectWallet() {

    const ethereumProvider = await detectEthereumProvider();

    if (ethereumProvider) {
      const address = await window.ethereum.request({
        method: 'eth_requestAccounts'
      })
      const balance = await window.ethereum.request({
        method:'eth_getBalance',
        params:[address[0],'latest']
      })
      setAccount({
        address: address[0],
        balance:balance,
        provider: ethereumProvider
      })
    }else{
      alert("Install metamask extension!! check bootom of page for link")
    }
  }


  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);}, []);

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


<Modal
  open={buy}
  onClose={handleCloseBuy}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>  
    <BinanceWidget />
  </Box>
</Modal>



      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo"><Link to="/">ROYALCOIN</Link></Typography.Title>
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
        <Menu.Item icon={<MoneyCollectOutlined />}>
          <span onClick={handleOpenBuy}>Buy</span>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item icon={<AreaChartOutlined />}>
          <Link to="/stats">Stats</Link>
        </Menu.Item>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
