import express from "express";
import "dotenv/config";
import vehiculesRouter from "./routes/vehicules";

const app = express();
const PORT = process.env.PORT;


app.use(express.json());



app.use("/vehicules", vehiculesRouter);





app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});