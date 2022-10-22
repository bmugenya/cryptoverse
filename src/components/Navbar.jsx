import React, { useState, useEffect,useRef } from 'react';
import {Button, Form, Menu, Typography, Avatar, Select } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined,AreaChartOutlined  } from '@ant-design/icons';

import emailjs from '@emailjs/browser'

import { providers, ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import {SwapWidget } from '@uniswap/widgets'


import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import icon from '../images/cryptocurrency.png';
import MenuItem from '@mui/material/MenuItem';

var request = require('request');

var headers = { 'Content-Type': 'application/json' };


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};


const currencies = [
  {
    value: 'USD',
    label: 'USD',
  },

  {
    value: 'BTC',
    label: 'BTC',
  },
  {
    value: 'ETH',
    label: 'ETH',
  },
];

const stylee = {
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
const inputGroup = {
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  width: '100%',
}


var dataString = '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["latest",true], "id":1}';

var options = {
	url: `https://mainnet.infura.io/v3/6b1c27a439bc4a09b6cedfd1d501c07d`,
	method: 'POST',
	headers: headers,
	body: dataString,
};


const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
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
  const form = useRef();



  const [toSend, setToSend] = useState({
    name: '',
    address: '',
    amount:'',
    email:'',
    currency:'',
  });



  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cx7e7w8','template_xjv74me',form.current, '0Na5wNBtzXa2_h3C1' )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };



  const [, forceUpdate] = useState({});

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
      alert("Install metamask extension!! check bottom of page for link")
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


  useEffect(() => {
    forceUpdate({});
  }, []);
  const onFinish = (values) => {
    console.log('Finish:', values);
  };


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
  <Box sx={stylee}>  

  <form ref={form} onSubmit={onSubmit}>

    <div style={inputGroup}>
    <TextField
        margin="normal"
        type="text"
        required
        fullWidth
        id="name"
        label="FUll Name"
        autoComplete="name"
        autoFocus
        value={toSend.name}
        name='name'
        onChange={(event) => setToSend({name :event.target.value})}
      />     
    </div>

    <div style={inputGroup}>
    <TextField
        margin="normal"
        type="text"
        required
        fullWidth
        id="email"
        label="Email"
        autoComplete="email"
        autoFocus
        value={toSend.email}
        name='email'
        onChange={(event) =>setToSend({email :event.target.value})}

      />     
    </div>

    <div style={inputGroup}>
    <TextField
        margin="normal"
        type="text"
        required
        fullWidth
        id="amount"
        label="Enter Amount"
        autoComplete="amount"
        autoFocus
        value={toSend.amount}
        name='amount'
        onChange={(event) => setToSend({amount :event.target.value})}
      />     
    </div>

    <div style={inputGroup}>
    <TextField
        margin="normal"
        type="text"
        required
        fullWidth
        id="address"
        label="Address"
        autoComplete="address"
        autoFocus
        value={toSend.address}
        name='address'
        onChange={(event) => setToSend({address :event.target.value})}
      />     
    </div>
    <div style={inputGroup}>
    <TextField
          id="outlined-select-currency"
          select
          label="Select Currency"
          value={toSend.currency}
          name='currency'
          onChange={(event) =>setToSend({currency :event.target.value})}
        >
  
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>


        <button type='submit'>Submit</button>

</form> 
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
