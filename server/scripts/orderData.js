// server/scripts/orderData.js
module.exports = (menuItems) => [
  {
    orderNumber: "ORD-1001",
    items: [
      { menuItem: menuItems[0]._id, quantity: 2, price: 120 },
      { menuItem: menuItems[8]._id, quantity: 1, price: 60 }
    ],
    totalAmount: 300,
    status: "Pending",
    customerName: "Ravi",
    tableNumber: 3
  },
  {
    orderNumber: "ORD-1002",
    items: [
      { menuItem: menuItems[2]._id, quantity: 1, price: 260 }
    ],
    totalAmount: 260,
    status: "Preparing",
    customerName: "Anjali",
    tableNumber: 1
  },
  {
    orderNumber: "ORD-1003",
    items: [
      { menuItem: menuItems[4]._id, quantity: 1, price: 300 },
      { menuItem: menuItems[10]._id, quantity: 1, price: 120 }
    ],
    totalAmount: 420,
    status: "Ready",
    customerName: "Suresh",
    tableNumber: 5
  },
  {
    orderNumber: "ORD-1004",
    items: [
      { menuItem: menuItems[6]._id, quantity: 2, price: 100 }
    ],
    totalAmount: 200,
    status: "Delivered",
    customerName: "Neha",
    tableNumber: 2
  },
  {
    orderNumber: "ORD-1005",
    items: [
      { menuItem: menuItems[11]._id, quantity: 1, price: 180 }
    ],
    totalAmount: 180,
    status: "Cancelled",
    customerName: "Arjun",
    tableNumber: 4
  },
  {
    orderNumber: "ORD-1006",
    items: [
      { menuItem: menuItems[1]._id, quantity: 2, price: 140 }
    ],
    totalAmount: 280,
    status: "Preparing",
    customerName: "Priya",
    tableNumber: 6
  },
  {
    orderNumber: "ORD-1007",
    items: [
      { menuItem: menuItems[3]._id, quantity: 1, price: 220 }
    ],
    totalAmount: 220,
    status: "Pending",
    customerName: "Karthik",
    tableNumber: 7
  },
  {
    orderNumber: "ORD-1008",
    items: [
      { menuItem: menuItems[12]._id, quantity: 1, price: 110 },
      { menuItem: menuItems[9]._id, quantity: 1, price: 80 }
    ],
    totalAmount: 190,
    status: "Delivered",
    customerName: "Meena",
    tableNumber: 8
  },
  {
    orderNumber: "ORD-1009",
    items: [
      { menuItem: menuItems[14]._id, quantity: 1, price: 140 }
    ],
    totalAmount: 140,
    status: "Ready",
    customerName: "Vikram",
    tableNumber: 9
  },
  {
    orderNumber: "ORD-1010",
    items: [
      { menuItem: menuItems[5]._id, quantity: 1, price: 150 }
    ],
    totalAmount: 150,
    status: "Delivered",
    customerName: "Sneha",
    tableNumber: 10
  }
];
