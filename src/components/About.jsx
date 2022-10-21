import React from 'react';

import { Typography, Collapse, Carousel, Image, Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';


import invest from '../images/invest.jpg';
import learn from '../images/learn.jpg';
import profit from '../images/profit.jpg';
import banner from '../images/banner.jpg';
import tim from '../images/tim.png';

const { Title } = Typography;
const { Panel } = Collapse;

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
          INVESTMENT PLANS
        </Title>

        <Title level={5}>
          Amount invested is withdrawable with the profit within 6 working days
        </Title>



        <Row gutter={[32, 32]}>

          <Col lg={{ span:6 }} >
            <Card title="STARTER PLAN">
              <Title level={5}>
                2% Daily ROI For 1 Day
              </Title>

              <Title level={5}>
                10% interest on crypto loans for 3 months
              </Title>
              <Title level={5}>
                cryptocurrencies at 5% discount
              </Title>
              <Title level={5}>
                loan limit  -   $50,000
              </Title>
              <Title level={5}>
                minimum deposit $50
              </Title>

            </Card>

          </Col>

          <Col lg={{ span:6}}>
            <Card title=" VIP 1 PLAN">

              <Title level={5}>
                5% Daily ROI For 1 Day
              </Title>

              <Title level={5}>
                15% interest on crypto loans for 3 months
              </Title>
              <Title level={5}>
                cryptocurrencies at 10% discount
              </Title>
              <Title level={5}>
                loan limit  -   $80,00
              </Title>
              <Title level={5}>
                RCS DECENTRALIZED FINANCE (Defi)
              </Title>

              <Title level={5}>
                minimum deposit  $1500
              </Title>

            </Card>


          </Col>



          <Col lg={{ span: 6}}>
            <Card title="VIP 2 PLAN">

              <Title level={5}>
                40% interest on crypto loans for 3 months
              </Title>
              <Title level={5}>
                cryptocurrencies at 20% discount
              </Title>
              <Title level={5}>
                loan limit -   $100,000
              </Title>
              <Title level={5}>
                RCS DECENTRALIZED FINANCE (Defi)
              </Title>

              <Title level={5}>
                minimum deposit $2500
              </Title>
            </Card>

          </Col>


          <Col lg={{span:6}}>

            <Card title="VIP 3  PLAN">



              <Title level={5}>
                60% interest on crypto loans for 3 months
              </Title>
              <Title level={5}>
                cryptocurrencies at 30% discount
              </Title>
              <Title level={5}>
                loan limit  -   $200,000
              </Title>
              <Title level={5}>
                RCS DECENTRALIZED FINANCE (Defi)
              </Title>

              <Title level={5}>
                minimum deposit $3000
              </Title>

            </Card>
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




      </div>





    </div>
  );
};

export default About;
