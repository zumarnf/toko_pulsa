import React, { useContext } from "react";
import { Card, Form, Input, Button, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { fetchCustomers } from "../api.js";
import { UserContext } from "../UserContext.jsx";

const { Title } = Typography;

function LoginMenu() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const onFinish = async (values) => {
    const customers = await fetchCustomers();
    const customer = customers.find(
      (customer) =>
        customer.username === values.username &&
        customer.password === values.password
    );

    if (customer) {
      setUser(customer);
      localStorage.setItem("user", JSON.stringify(customer));
      message.success("Login successful!");
      navigate("/menu");
    } else {
      message.error("Invalid username or password");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Card
      title={
        <Title level={3} style={{ margin: 0 }}>
          Login
        </Title>
      }
      bordered={false}
      style={{
        width: 300,
        margin: "0 auto",
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 8,
          }}
          style={{
            marginTop: 50,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}

export default LoginMenu;
