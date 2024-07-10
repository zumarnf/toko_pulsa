import React, { useContext } from "react";
import { Menu, Button, Dropdown, message, Modal } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../UserContext.jsx";
import { Header } from "antd/es/layout/layout.js";

const HeaderMenu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  const handleLogout = () => {
    Modal.confirm({
      title: "Logout",
      content: "Are you sure you want to logout?",
      onOk: () => {
        setUser(null);
        message.success("Successfully logged out");
        navigate("/");
      },
    });
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
      label: user?.name ? (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="logout" onClick={handleLogout}>
                Logout
              </Menu.Item>
            </Menu>
          }
        >
          <span>{user.name}</span>
        </Dropdown>
      ) : (
        <Link to="/">Login</Link>
      ),
    },
  ];

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
