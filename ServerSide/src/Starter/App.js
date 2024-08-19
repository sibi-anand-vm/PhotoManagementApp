import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import DBConnector from "../config/dbconnector.js";
import Routes from '../routes/Routes.js';
dotenv.config();
DBConnector();
const PORT = process.env.PORT || 4008;
const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' })); // Increase payload limit to 50MB
app.use(express.urlencoded({ extended: true, limit: '50mb' })); // Increase payload limit to 50MB

app.use("/api/", Routes);

app.listen(PORT, () => {
});
