const Router = require("express");
const router = new Router();
const paymentController = require("../controller/payment_controller");

router.get("/payment", paymentController.getPayments);
router.get("/payment/id", paymentController.getOnePayment);

module.exports = router;
