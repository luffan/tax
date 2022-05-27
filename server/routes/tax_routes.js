const Router = require("express");
const router = new Router();
const taxController = require("../controller/tax_controller");

router.post("/tax", taxController.createTax);
router.get("/tax", taxController.getTaxes);
router.put("/tax", taxController.updateTax);
router.delete("/tax/:id", taxController.deleteTax);

module.exports = router;
