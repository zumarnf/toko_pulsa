import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Card, Col, Row, Button, Flex } from "antd";

function CardMenu() {
  return (
    <>
      <Row gutter={20}>
        <Col span={6}>
          <Card title="Card title" bordered={false} style={{ boxShadow: "0 0 8px #d9d9d9", marginBottom: "16px" }}>
            Card content
            <Flex align="center" justify="end">
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
            >
              Buy
            </Button>
            </Flex>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CardMenu;
