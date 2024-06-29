import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Card, Col, Row, Button, Flex } from "antd";

function CardMenu() {
  return (
    <>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
            <Flex align="center" justify="end">
            <Button
              type="primary"
              icon={<SearchOutlined />}
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
