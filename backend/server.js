import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
const app = express();
mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona",{
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,
});


app.use("/api/users", userRouter);
app.use('/api/products', productRouter);
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({mesage: err.message});
});

const port = 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});


