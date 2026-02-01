const router = require("express").Router();
const c = require("../controllers/menuController");

router.get("/", c.getMenu);
router.get("/search", c.searchMenu);
router.get("/:id", c.getMenuItemById);
router.post("/", c.createMenu);
router.put("/:id", c.updateMenu);
router.delete("/:id", c.deleteMenu);
router.patch("/:id/availability", c.toggleAvailability);

module.exports = router;
