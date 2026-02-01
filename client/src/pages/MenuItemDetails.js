import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";

export default function MenuItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    api.get(`/menu/${id}`).then(res => setItem(res.data));
  }, [id]);

  if (!item) return <p className="container">Loading...</p>;

  return (
    <div className="details-wrapper">
        <div className="details-card">
        <img
            src={item.imageUrl}
            alt={item.name}
            className="details-image"
        />

        <h2>{item.name}</h2>

        <p className="details-price">₹{item.price}</p>

        <p><b>Category:</b> {item.category}</p>
        <p><b>Description:</b> {item.description}</p>
        <p><b>Preparation Time:</b> {item.preparationTime} mins</p>

        <h4>Ingredients</h4>
        <ul>
            {item.ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
            ))}
        </ul>
        </div>
    </div>
    );
}