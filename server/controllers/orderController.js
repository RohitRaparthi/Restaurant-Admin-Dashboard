const Order = require("../models/Order");

exports.getOrders = async (req, res) => {
  const { status, page = 1 } = req.query;
  const filter = status ? { status } : {};

  const orders = await Order.find(filter)
    .populate("items.menuItem");

  res.json(orders);
};

exports.createOrder = async (req, res) => {
  const order = await Order.create({
    ...req.body,
    orderNumber: `ORD-${Date.now()}`
  });
  res.status(201).json(order);
};

exports.updateStatus = async (req, res) => {
  const order = await Order.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );
  res.json(order);
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("items.menuItem");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.json(order);
  } catch (err) {
    res.status(400).json({ message: "Invalid order ID" });
  }
};
