import express from "express";
import cors from "cors";
import router from "./routes/index";
import { config } from "./config/config";

const app = express();
const PORT = config.port;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
