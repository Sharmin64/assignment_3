import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/mddlewares/globalErrorHandler";
import notFoundRoute from "./app/mddlewares/notFoundRoute";
const app: Application = express();

// parsers

app.use(express.json());
app.use(cors());

app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);

app.use(notFoundRoute);

export default app;
