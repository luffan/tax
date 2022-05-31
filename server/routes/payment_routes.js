const Router = require("express");
const router = new Router();
const paymentController = require("../controller/payment_controller");

router.post("/payment", paymentController.createPayment);
router.get("/payment", paymentController.getPayments);
router.get("/payment/:id", paymentController.getOnePayment);
router.put("/payment", paymentController.updatePayment);
router.delete("/payment/:id", paymentController.deletePayment);

module.exports = router;
