import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import "../styles/orders.css";

export default function OrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    api.get(`/orders/${id}`).then(res => setOrder(res.data));
  }, [id]);

  if (!order) {
    return <div className="container">Loading order details...</div>;
  }

  return(
    <div className="container order-details-wrapper">
      <div className="order-details-card">
        <h2>{order.orderNumber}</h2>

        <p><b>Status:</b> {order.status}</p>
        <p><b>Customer:</b> {order.customerName}</p>
        <p><b>Table:</b> {order.tableNumber}</p>
        <p><b>Ordered At:</b> {new Date(order.createdAt).toLocaleString()}</p>

        <hr />

        <h3>🧾 Items</h3>

        {order.items.map((item, index) => (
          <div key={index} className="order-item-row">
            <span>{item.menuItem.name}</span>
            <span>Qty: {item.quantity}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <hr />

        <h3 className="order-total">Total: ₹{order.totalAmount}</h3>
      </div>
    </div>
  );
}
