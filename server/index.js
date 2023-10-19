import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import watchRoutes from "./routes/watches.js";

dotenv.config();

const myApplication = express();
myApplication.use(express.json());
myApplication.use(helmet());
myApplication.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
myApplication.use(morgan("common"));
myApplication.use(bodyParser.json({ limit: "30mb", extended: true }));
myApplication.use(bodyParser.urlencoded({ limir: "30mb", extended: true }));
myApplication.use(cors());


myApplication.get("/",(req,res) => res.send("Hello the best developer"));

// Routes

myApplication.use("/watches", watchRoutes)

// Mongoose setup

const PORT = process.env.PORT || 6100;
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    myApplication.listen(PORT, () => console.log(`Server runnning on port ${PORT}`));
})
.catch((error) => console.log(`${error} did not connect`))

// Mongoose setup