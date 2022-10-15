import React from 'react';

import { Typography, Collapse,Carousel,Image,Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';

const { Title } = Typography;
const { Panel } = Collapse;
import invest from '../images/invest.jpg';
import learn from '../images/learn.jpg';
import profit from '../images/profit.jpg';
import banner from '../images/banner.jpg';
import tim from '../images/tim.png';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const inves = {
  background: '#364d79',
};

const About = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;


  return (
    <div className="car">
    

      <Carousel autoplay>
    
    <div style={inves}>
    <Image
    width='100%'
  
    src={invest}
  />
    
    </div>
    
    <div style={contentStyle}>
    <Image
   width='100%'
    src={learn}
  />
    
    </div>

    <div style={contentStyle}>
    <Image
     width='100%'
   
    src={profit}
  />
    
    </div>
    
   
    </Carousel>

    <Title level={2} className="heading">ROYALCOIN SYNDICATE</Title> 

    <div>
     <p className="text">Royalcoin Syndicate Escrow System  is a private Crypto Trading System setup by a group of people from Canada, United States, Australia, India, Egypt, Mexico, Denmark, Germany, working under the United Nations developmental programme (UNDP) to help them potentially benefit from the Crypto Space  and it's been managed by crypto experts.  it's also a way for  them making investments privately in the crypto space.
Royalcoin Syndicate Escrow system is a system with a total number of 50 people across 8 countries and they have agreed to make it up to 150 maximum due to the up coming projects plan. And we will be 100 people at the end of this year. 
</p>


<p className="text">
Royalcoin Syndicate has been operating privately for 5 years and now with his early stage  of coming to public with some interesting, trust and reliable features to help people benefit from Mataverse, Blockchain Technology / Crypto space and how they can change they financial status positively by partnering with Royalcoin Syndicate Escrow ystem 

Our unique selection of investment products, award-winning customer support team and behaviourally-driven rewards program creates an investment experience unlike any other.
</p>

<Title level={5}>
Meet the team
</Title>

<Row gutter={[32, 32]}>
        
        <Col span={8}>
        <Image
   width={200}
   rootClassName='round'
    src={tim}
  />
<Title level={5}>
CEO: John Doe
</Title>

</Col>

<Col span={8}>
<Image
   width={200}
   rootClassName='round'
    src={tim}
  />
<Title level={5}>
Sales: John Doe
</Title>
</Col>

<Col span={8}>
<Image
   width={200}
   rootClassName='round'
    src={tim}
  />
<Title level={5}>
Developer: John Doe
</Title>
</Col>
</Row>

<Title level={5}>
We only trade on the most reputable Crypto Currencies. Reducing the risk of relying on any single point of failure.
</Title>




<Image
   width='100%'
   height="500px"
    src={banner}
  />


<Title level={5}>



These are features you can work with and make money with a short period of 1-6 months time.
</Title>
<Title level={5}>
1. NFT  Invest in our NFT project and get  50%  return after 6 months. $300 - %1000
</Title>
<Title level={5}>
2. CRYPTO TRADING :  Sharing of daily returns, 2% -30% ROI
</Title>
<Title level={5}>
We are a team of experts that do 2 crypto pumps weekly and we give free serious crypto recommendations
</Title>
<Title level={5}>
Starter $50 2% Daily
</Title> 
<Title level={5}>
VIP1 $1500 15% Daily
</Title>
<Title level={5}>
VIP2 $2000 20% Daily
</Title>
<Title level={5}>
VIP3 $2500 40% Daily 
</Title>
<Title level={5}>
VIP4 $3000 60% Daily
</Title>
<Title level={5}>

Amount invested is withdrawable with the profit within 6 working days 
</Title>
<Title level={5}>
3. CRYPTO LOAN:  Take a soft loan and pay back within 3 months with 15% interest.
</Title>
<Title level={5}>
Minimum loan amount is $15,000  -   $100,000
</Title>
<Title level={5}>
4. BUY CRYPTO CURRENCY :  Royalcoin Syndicate Escrow system  is celebrating 5 years anniversary and selling Crypto Currency with 5% discount price and gives you 10%  if you bring buyers. 
</Title>
<Title level={5}>
Get %5 to 10% discount on every of your purchase 
</Title>
<Title level={5}>
$5000 = %5.     $50,000= %10
</Title>
<Title level={5}>
5. RCS DECENTRALIZED FINANCE (Defi)
</Title>
<Title level={5}>
TOKEN  STAKING: coming soon.
</Title>
<Title level={5}>
Prepare for a  positive change
</Title> 
<Title level={5}>

Total Supply: 250,000,000
</Title>
<Title level={5}>
Circulating Supply: 50,000,000
</Title>
<Title level={5}>
Token Value: 1= $2 
</Title>
<Title level={5}>
RSC Token Pool.
</Title>
</div>




   
    </div>
  );
};

export default About;
