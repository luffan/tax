const express = require("express");
const userRouter = require("./routes/user_routes");
const taxRouter = require("./routes/tax_routes");
const paymentRouter = require("./routes/payment_routes");

const corsMiddleware = require('./middleware/cors.middleware')

const incomeRouter = require("./routes/income_routes");
const expensesRouter = require("./routes/expenses_routes");
const workerRouter = require("./routes/worker_routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(corsMiddleware)
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", taxRouter);
app.use("/api", paymentRouter);
app.use("/api", incomeRouter);
app.use("/api", expensesRouter);
app.use("/api", workerRouter);

app.listen(PORT, () => console.log("server started on port %s", PORT));
