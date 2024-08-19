/* eslint-disable no-console */
import app from "./app";
import mongoose from "mongoose";
import config from "./app/config";

async function main() {
  try {
    await mongoose
      .connect(config?.mongodb_uri as string)
      .then(() => console.log("Database connection established to Mongodb"))
      .catch(() => console.log("Database connection failed"));

    app.listen(config?.port, () => {
      console.log(`Car Washing Project app listening on port ${config?.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main().catch(console.error);
