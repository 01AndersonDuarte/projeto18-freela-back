import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import router from "./routes/index.routes.js";

const server = express();

server.use(cors());
server.use(express.json());
server.use(router);
dotenv.config();


const PORT = process.env.PORT || 5000;
server.listen(PORT, ()=>console.log(`Server connected on port ${PORT}`));