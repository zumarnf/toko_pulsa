import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import CardHistory from "../components/CardHistory";

const { Header, Content, Footer } = Layout;

function HistoryPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", display:"block", overflow:"auto" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="demo-logo" style={{ color: "#fff" }}>
          Logo
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex" }}>
            <Menu.Item key="1">Menu</Menu.Item>
            <Menu.Item key="2">Daftar Transaksi</Menu.Item>
          </div>
          <Menu.Item key="3" style={{ marginLeft: "auto" }}>
            Login
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            marginTop: "40px",
          }}
        >
          <div>
            <h2>Riwayat Pembelian</h2>
            <CardHistory />
          </div>
          
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default HistoryPage;
