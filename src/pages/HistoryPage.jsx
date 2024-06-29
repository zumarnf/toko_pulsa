import React from "react";
import { Layout, theme } from "antd";
import CardHistory from "../components/CardHistory";
import HeaderMenu from "../layouts/HeaderMenu.jsx";

const { Header, Content, Footer } = Layout;

function HistoryPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh", display: "block", overflow: "auto" }}>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <HeaderMenu />
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
