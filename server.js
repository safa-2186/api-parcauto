import express from "express";
import "dotenv/config";
import vehiculesRouter from "./routes/vehicules";
import journal from "./middlewares/journal.js";

const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(journal);



app.use("/vehicules", vehiculesRouter);


app.use((req, res) => {
  res.status(404).json({ erreur: "Route introuvable" });
});


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});


