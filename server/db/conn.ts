import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: './config.env'});

const DB: any = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection", err));
