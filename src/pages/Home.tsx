import React from "react";
import { Layout, Menu, Typography, Row, Col, Card, Button } from "antd";
const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const apiCards = [
  { title: "Wallet API", desc: "Wallet history, transfers, balances, tokens & PnL." },
  { title: "Token API", desc: "Token balances, transfers, holders, swaps." },
  { title: "NFT API", desc: "Metadata, floor prices, transfers, ownership." },
  { title: "Price API", desc: "Real-time crypto prices, OHLC, trading volume." },
  { title: "DeFi API", desc: "Positions, liquidity, reserves & pairs." },
  { title: "Blockchain API", desc: "Blocks, transactions, logs, internal txs." },
  { title: "Streams API", desc: "Monitor crypto data in real time." },
];

export default function APILanding() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header */}
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div style={{ float: "left", color: "#fff", fontSize: 24, fontWeight: "bold" }}>
          Zero-Trust Data Engine
        </div>
        <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
          <Menu.Item key="docs">Docs</Menu.Item>
          <Menu.Item key="sandbox">Sandbox</Menu.Item>
          <Menu.Item key="start">Get Started</Menu.Item>
        </Menu>
      </Header>

      {/* Page Content */}
      <Content style={{ padding: "100px 50px 50px", background: "#f0f2f5" }}>
        {/* Hero */}
        <Row justify="center" align="middle" style={{ marginBottom: 50 }}>
          <Col xs={24} md={16} style={{ textAlign: "center" }}>
            <Title>Enterprise-Grade Web3 APIs for Developers</Title>
            <Paragraph>Secure, scalable, easy-to-use APIs for Wallets, NFTs, Tokens, DeFi, and more.</Paragraph>
            <Button type="primary" size="large">See All APIs</Button>
          </Col>
        </Row>

        {/* APIs Grid */}
        <Row gutter={[16, 16]}>
          {apiCards.map((api) => (
            <Col xs={24} sm={12} md={8} lg={6} key={api.title}>
              <Card hoverable title={api.title}>
                <Paragraph>{api.desc}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} MyWeb3API — Built with Ant Design
      </Footer>
    </Layout>
  );
}
