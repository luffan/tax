const Router = require("express");
const router = new Router();
const workerController = require("../controller/worker_controller");

router.post("/worker", workerController.createWorker);
router.get("/worker", workerController.getWorker);
router.get("/worker/id", workerController.getOneWorker);
router.put("/worker", workerController.updateWorker);
router.delete("/worker", workerController.deleteWorker);

module.exports = router;
