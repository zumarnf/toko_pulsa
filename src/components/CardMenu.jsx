// src/components/CardMenu.jsx
import React, { useState, useEffect } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Row, Button } from "antd";
import axios from "axios";

function CardMenu({ kriteria }) {
  const [products, setProducts] = useState([]);

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

  return (
    <Row gutter={[20, 20]}>
      {products.map((product) => (
        <Col span={6} key={product.id}>
          <Card
            title={product.namaproduk}
            bordered={false}
            style={{ boxShadow: "0 0 8px #d9d9d9", marginBottom: "16px" }}
          >
            <div>{product.deskripsi}</div>
            <div>Harga: {product.price}</div>
            <Button type="primary" icon={<ShoppingCartOutlined />}>
              Buy
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardMenu;
