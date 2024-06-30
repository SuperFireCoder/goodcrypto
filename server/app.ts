import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import router from "./routes/index";
import { config } from "./config/config";
import swaggerSpec from "./config/swaggerConfig";

const app = express();
const PORT = config.port;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("combined"));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
