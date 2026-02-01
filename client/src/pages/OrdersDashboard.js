import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import "../styles/orders.css";

export default function OrdersDashboard() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const res = await api.get("/orders");
    setOrders(res.data);
  };

  const updateStatus = async (id, newStatus) => {
    const prev = [...orders];
    setOrders(orders.map(o =>
      o._id === id ? { ...o, status: newStatus } : o
    ));

    try {
      await api.patch(`/orders/${id}/status`, { status: newStatus });
    } catch {
      alert("Failed to update order status");
      setOrders(prev);
    }
  };

  return (
    <div className="container">
      <h2>📦 Orders</h2>

      <div className="orders-grid">
        {orders.map(order => (
          <div key={order._id} className="order-card" onClick={() => navigate(`/orders/${order._id}`)}>
            <h3>{order.orderNumber}</h3>

            <p><b>Customer:</b> {order.customerName}</p>
            <p><b>Table:</b> {order.tableNumber}</p>
            <p><b>Total:</b> ₹{order.totalAmount}</p>

            <select
              className={`status-select ${order.status.toLowerCase()}`}
              value={order.status}
              onChange={(e) =>
                updateStatus(order._id, e.target.value)
              }
            >
              <option value="Pending">Pending</option>
              <option value="Preparing">Preparing</option>
              <option value="Ready">Ready</option>
              <option value="Delivered">Delivered</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
