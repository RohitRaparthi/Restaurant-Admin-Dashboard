const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, "../.env")
});

const mongoose = require("mongoose");
const MenuItem = require("../models/MenuItem");
const Order = require("../models/Order");
const menuData = require("./menuData");
const orderData = require("./orderData");

if (!process.env.MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is undefined. .env not loaded.");
}

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("✅ MongoDB connected for seeding");

  await MenuItem.deleteMany();
  await Order.deleteMany();

  const menuItems = await MenuItem.insertMany(menuData);
  await Order.insertMany(orderData(menuItems));

  console.log("✅ Demo data seeded successfully");
  process.exit(0);
})();
