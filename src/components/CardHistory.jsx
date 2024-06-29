import React, { useContext, useState, useEffect } from "react";
import { Card, List, Button, message } from "antd";
import axios from "axios";
import { UserContext } from "../UserContext";

function CardHistory() {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/transactions?userId=${user.id}`
        );
        console.log("Transactions fetched:", response.data); // Debugging: log fetched data
        setTransactions(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching transactions:", error);
        setLoading(false);
      }
    };

    if (user) {
      fetchTransactions();
    }
  }, [user]);

  const handleDeleteAll = async () => {
    try {
      await axios.delete(
        `http://localhost:3000/transactions?userId=${user.id}`
      );
      setTransactions([]);
      message.success("Riwayat pembelian berhasil dihapus.");
    } catch (error) {
      console.error("Error deleting transactions:", error);
      message.error("Gagal menghapus riwayat pembelian.");
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:3000/transactions/${itemId}`);
      setTransactions(transactions.filter((item) => item.id !== itemId));
      message.success("Item riwayat pembelian berhasil dihapus.");
    } catch (error) {
      console.error("Error deleting transaction item:", error);
      message.error("Gagal menghapus item riwayat pembelian.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={transactions}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Card
              title={item.namaproduk}
              extra={
                <Button
                  type="text"
                  danger
                  onClick={() => handleDeleteItem(item.id)}
                >
                  hapus
                </Button>
              }
            >
              <p>{item.kriteria}</p>
              <p>{item.price}</p>
              <p>{item.deskripsi}</p>
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
}

export default CardHistory;
