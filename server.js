import express from "express";
import "dotenv/config";
import vehiculesRouter from "./routes/vehicules.js";
import journal from "./middlewares/journal.js";


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(journal);



app.use("/vehicules", vehiculesRouter);


app.use((req, res) => {
  res.status(404).json({ erreur: "Route introuvable" });
});


app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});

