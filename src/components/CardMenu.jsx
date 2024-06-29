import React, { useState, useEffect, useContext } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Row, Button, Typography } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";

const { Title } = Typography;

function CardMenu({ kriteria }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/db.json");
        const filteredProducts = response.data.produk.filter(
          (product) => product.kriteria === kriteria
        );
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [kriteria]);

  const handleBuy = (product) => {
    if (user) {
      navigate("/transaksi", { state: product });
    } else {
      navigate("/");
    }
  };

  return (
    <Row gutter={[20, 20]}>
      {products.map((product) => (
        <Col span={6} key={product.id}>
          <Card
            title={
              <Title
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  marginTop: "20px",
                }}
              >
                {product.namaproduk}
              </Title>
            }
            bordered={false}
            style={{ boxShadow: "0 0 8px #d9d9d9", marginBottom: "16px" }}
          >
            <Row
              style={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Col>
                <div>{product.deskripsi}</div>
                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: "bold",
                    fontSize: "18px",
                  }}
                >
                  {product.price}
                </div>
              </Col>
              <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                onClick={() => handleBuy(product)}
              >
                Buy
              </Button>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardMenu;
