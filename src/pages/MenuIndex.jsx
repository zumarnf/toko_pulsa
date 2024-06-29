import React, { useContext } from "react";
import { Layout, Row, Typography } from "antd";
import CardMenu from "../components/CardMenu.jsx";
import { UserContext } from "../UserContext.jsx";
import HeaderMenu from "../layouts/HeaderMenu.jsx";

const { Header, Content } = Layout;
const { Title } = Typography;

function MenuIndex() {
  const { user } = useContext(UserContext);

  return (
    <Layout style={{ maxHeight: "100vh", display: "block", overflow: "auto" }}>
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
        style={{ padding: "0 48px", marginBottom: "40px", marginTop: "30px" }}
      >
        <Title level={3} style={{ marginBottom: "20px" }}>
          Pilih Mau Pulsa Atau Paket Data?
        </Title>
        <div
          style={{
            padding: "24px",
            background: "#fff",
            borderRadius: "8px",
            marginBottom: "40px",
          }}
        >
          <div style={{ marginBottom: "24px" }}>
            <Row
              style={{
                marginBottom: "5px",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "28px",
                  marginBottom: "15px",
                }}
              >
                Pulsa
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: 25,
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Saldo: {user ? user.saldo : "0"}
              </div>
            </Row>
            <CardMenu kriteria="pulsa" />
          </div>
          <hr />
          <div style={{ marginBottom: "24px" }}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "28px",
                marginTop: "10px",
                marginBottom: "15px",
              }}
            >
              Paket Data
            </div>
            <CardMenu kriteria="internet" />
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default MenuIndex;
