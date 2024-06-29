import React, { useContext } from "react";
import { Card, Typography, Row, Col, Button, message } from "antd";
import { UserContext } from "../UserContext";
import { useLocation, useNavigate } from "react-router-dom";
import { ShoppingCartOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import axios from "axios";

const { Title } = Typography;

function Transaksi() {
  const { user, setUser } = useContext(UserContext);
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    navigate("/menu");
    return null;
  }

  const { kriteria, namaproduk, deskripsi, price } = location.state;

  const handleBuy = async () => {
    if (user.saldo < price) {
      message.error("Saldo tidak cukup!");
      return;
    }

    const newSaldo = user.saldo - price;
    const newUser = { ...user, saldo: newSaldo };

    try {
      // Update the customer saldo in the db.json
      await axios.patch(`http://localhost:3000/customers/${user.id}`, {
        saldo: newSaldo,
      });

      // Add the transaction to the transactions list in the db.json
      await axios.post(`http://localhost:3000/transactions`, {
        userId: user.id,
        kriteria,
        namaproduk,
        price,
        deskripsi,
      });

      // Update the user context
      setUser(newUser);

      // Navigate to history page
      navigate("/riwayat");

      message.success("Pembelian berhasil!");
    } catch (error) {
      if (error.response && error.response.status === 401) {
        
      } else {
        message.error("Terjadi kesalahan!");
        message.error("Silakan login kembali.");
        navigate("/");
        console.error("Error during transaction:", error);
      }
    }
  };

  return (
    <Card
      bordered={false}
      style={{
        width: 380,
        margin: "0 auto",
        marginTop: "180px",
        textAlign: "center",
      }}
    >
      <Row
        style={{
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <Col>
          <Button
            icon={<ArrowLeftOutlined />}
            type="text"
            onClick={() => navigate("/menu")}
          />
        </Col>
        <Col style={{ flex: "auto", textAlign: "center", marginLeft: "20px" }}>
          <Title level={3} style={{ margin: 0 }}>
            Transaksi
          </Title>
        </Col>
        <Col span={4}></Col>
      </Row>
      <hr />
      <Row style={{ marginTop: "20px" }}>
        <Col span={12} style={{ textAlign: "left" }}>
          <div style={{ fontWeight: "bold", fontSize: "24px" }}>
            {" "}
            {kriteria}
          </div>
          <div style={{ fontWeight: "bold", fontSize: "18px" }}>
            {" "}
            {namaproduk}
          </div>
          <div style={{ fontSize: "14px", fontWeight: "normal" }}>
            {" "}
            {deskripsi}
          </div>
        </Col>
        <Col span={12} style={{ textAlign: "right", marginTop: "auto" }}>
          <div style={{ fontWeight: "normal", fontSize: "16px" }}>
            Saldo: {user ? user.saldo : "Loading..."}
          </div>
          <div style={{ fontSize: "18px", fontWeight: "bold" }}> {price}</div>
        </Col>
      </Row>
      <Button
        type="primary"
        icon={<ShoppingCartOutlined />}
        style={{
          marginTop: "30px",
          width: "200px",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={handleBuy}
      >
        Buy
      </Button>
    </Card>
  );
}

export default Transaksi;
