import { useEffect, useState } from "react";
import api from "../api/axios";
import MenuCard from "../components/MenuCard";
import "../styles/menu.css";

export default function MenuManagement() {
  const [menu, setMenu] = useState([]);

  const toggleAvailability = async (id) => {
    const prev = [...menu];
    setMenu(menu.map(item =>
      item._id === id
        ? { ...item, isAvailable: !item.isAvailable }
        : item
    ));

    try {
      await api.patch(`/menu/${id}/availability`);
    } catch {
      alert("Failed to update availability");
      setMenu(prev);
    }
  };

  useEffect(() => {
    api.get("/menu").then(res => setMenu(res.data));
  }, []);

  return (
    <div className="container">
      <h2>🍔 Menu Management</h2>
      <div className="menu-grid">
        {menu.map(item => (
          <MenuCard
            key={item._id}
            item={item}
            onToggle={() => toggleAvailability(item._id)}
          />

        ))}
      </div>
    </div>
  );
}
