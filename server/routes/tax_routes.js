const Router = require("express");
const router = new Router();
const taxController = require("../controller/tax_controller");

router.post("/tax", taxController.createTax);
router.get("/tax", taxController.getTaxByUserAndPayment);

module.exports = router;
