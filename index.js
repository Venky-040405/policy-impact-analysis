import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import predictRoute from "./routes/predict.js"

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", predictRoute);

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
