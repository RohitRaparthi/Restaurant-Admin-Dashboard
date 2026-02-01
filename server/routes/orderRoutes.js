const router = require("express").Router();
const c = require("../controllers/orderController");

router.get("/", c.getOrders);
router.get("/:id", c.getOrderById);
router.post("/", c.createOrder);
router.patch("/:id/status", c.updateStatus);

module.exports = router;
