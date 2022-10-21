import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar,Layout, Space } from 'antd';
import { Link } from 'react-router-dom';


import BinanceWidget from './BinanceWidget'

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';





const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
};




const Footer = () => {


  const [buy, setBuy] = React.useState(false);
  const handleOpenBuy = () => setBuy(true);
  const handleCloseBuy= () => setBuy(false);




  return (
    <>

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

<div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link>
           <br />
           All Rights Reserved.
           </Typography.Title>

          <Button onClick={handleOpenBuy}>Buy from our affliate partners</Button><br/>

        
        
     
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
          <a target="_blank"  rel="noreferrer" href="https://metamask.io/download/">install Metamask</a>
        </Space>
      </div>
      </>
  );
};

export default Footer;
