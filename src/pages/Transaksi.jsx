import React from "react";
import { CheckOutlined, LeftOutlined } from "@ant-design/icons";
import { Col, Layout, Typography, Row, theme, Button } from "antd";

const { Header, Content } = Layout;
const { Title } = Typography;

function Transaksi() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ maxHeight: "100vh", display: "block", overflow: "auto" }}>
      <Content
        style={{
          padding: "0 48px",
          marginBottom: "40px",
          marginTop: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            padding: "24px",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            marginBottom: "40px",
            width: "100%",
            maxWidth: "600px",
          }}
        >
          <div
            style={{
              marginBottom: "24px",
              textAlign: "center",
              display: "flex",
              alignItems: "center",
            }}
          >
            <LeftOutlined
              style={{
                fontSize: "18px",
                marginRight: "8px",
                cursor: "pointer",
              }}
            />
            <Title level={3} style={{ margin: 1 }}>Transaksi</Title>
          </div>
          <hr />
          <Row gutter={24}>
            <Col span={12}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "15px",
                }}
              >
                Pulsa / Paket Internet
              </div>
              <div
                style={{
                  fontWeight: "normal",
                  fontSize: "16px",
                  marginBottom: "15px",
                }}
              >
                50GB / 50.000
              </div>
              <div style={{ fontWeight: "normal", fontSize: "16px" }}>
                Deskripsi tanggal 30 hari
              </div>
            </Col>
            <Col span={12}>
              <div
                style={{
                  textAlign: "right",
                  marginRight: "10px",
                  fontSize: "16px",
                }}
              >
                Saldo
              </div>
              <div
                style={{
                  textAlign: "right",
                  marginRight: "10px",
                  fontSize: "16px",
                  marginTop: "18px",
                }}
              >
                70.000
              </div>
              <div
                style={{
                  textAlign: "right",
                  marginRight: "10px",
                  marginTop: "15px",
                  fontWeight: "bold",
                }}
              >
                Harga yang dibayar 52.000
              </div>
            </Col>
          </Row>
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              type="primary"
              icon={<CheckOutlined />}
              style={{ width: 280 }}
            >
              Buy
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

export default Transaksi;
