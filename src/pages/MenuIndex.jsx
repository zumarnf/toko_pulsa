import React from "react";
import { Layout, Menu, theme, Typography } from "antd";
import CardMenu from "../components/CardMenu";

const { Header, Content } = Layout;
const { Title } = Typography;

function MenuIndex() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ maxHeight: "100vh", display:"block", overflow:"auto" }}>
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
      <Content style={{ padding: "0 48px", marginBottom: "40px", marginTop: "30px" }}>
      <Title level={3} style={{ marginBottom: "20px" }}>Pilih Mau Pulsa Atau Paket Data?</Title>
        <div
          style={{
            padding: "24px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            marginBottom: "40px",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <h2>Pulsa</h2>
            <CardMenu />
          </div>
          <hr />
          <div style={{ marginBottom: "24px" }}>
            <h2>Paket Data</h2>
            <CardMenu />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default MenuIndex;
