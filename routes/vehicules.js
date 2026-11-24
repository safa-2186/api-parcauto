import {Router} from "express";

const router = Router;


let vehicules = [
  { id: 1, marque: "Dacia", modele: "Logan", immatriculation: "12345-A-6", disponible: true },
  { id: 2, marque: "Renault", modele: "Clio", immatriculation: "67890-B-6", disponible: false },
  { id: 3, marque: "Peugeot", modele: "208", immatriculation: "24680-D-1", disponible: true }
];





// GET	/vehicules	liste les véhicules ; avec ?disponible=true, seulement les disponibles

router.get("/", (req, res) => {

    if(req.query.disponible === "true") {

        const disponible = vehicules.filtrer((v) => v.disponible === true);
        return res.status(200).json(disponible);
    }

    res.status(200).json(vehicules);
});




// GET	/vehicules/:id	renvoie un véhicule

router.get("/:id", (res, req) => {

    const id = Number(req.params.id);
    const vehicule = vehicules.find((v) => v.id === id);

    if (!vehicule) {
        return res.status(404).json({ erreur: "véhicule introuvable"});
    }

    res.status(200).json(vehicule);
});





export default router;








