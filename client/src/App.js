import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MenuManagement from "./pages/MenuManagement";
import MenuItemDetails from "./pages/MenuItemDetails";
import OrdersDashboard from "./pages/OrdersDashboard";
import OrderDetails from "./pages/OrderDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MenuManagement />} />
        <Route path="/menu/:id" element={<MenuItemDetails />} />
        <Route path="/orders" element={<OrdersDashboard />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
