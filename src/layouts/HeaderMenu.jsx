import React, { useContext } from "react";
import { Menu, Button } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import { Header } from "antd/es/layout/layout.js";

const HeaderMenu = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  const items = [
    {
      key: "menu",
      label: <Link to="/menu">Menu</Link>,
    },
    {
      key: "riwayat",
      label: <Link to="/riwayat">Riwayat</Link>,
    },
    {
      key: "login",
      label: user?.name ? user.name : <Link to="/">Login</Link>,
    },
  ];
  console.log(user);

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="demo-logo" />
      <Menu
        style={{
          width: 500,
        }}
        theme="dark"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="horizontal"
        items={items}
      />
    </Header>
  );
};

export default HeaderMenu;
