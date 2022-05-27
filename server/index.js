const express = require("express");
const userRouter = require("./routes/user_routes");
const taxRouter = require("./routes/tax_routes");
const paymentRouter = require("./routes/payment_routes");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", userRouter);
app.use("/api", taxRouter);
app.use("api", paymentRouter);

app.listen(PORT, () => console.log("server started"));
