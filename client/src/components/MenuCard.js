import { useNavigate } from "react-router-dom";
import "../styles/menu.css";

export default function MenuCard({ item, onToggle }) {
  const navigate = useNavigate();

  return (
    <div className="menu-card">
      <div
        className="menu-clickable"
        onClick={() => navigate(`/menu/${item._id}`)}
      >
        <img src={item.imageUrl} alt={item.name} />
        <h3>{item.name}</h3>
        <p className="category">{item.category}</p>
        <p className="price">₹{item.price}</p>
      </div>

      <button
        className={`availability-btn ${
          item.isAvailable ? "available" : "unavailable"
        }`}
        onClick={(e) => {
          e.stopPropagation();
          onToggle(item._id);
        }}
      >
        {item.isAvailable ? "Mark Unavailable" : "Mark Available"}
      </button>
    </div>
  );
}
