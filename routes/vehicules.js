import {Router} from "express";

const router = Router();


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

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const vehicule = vehicules.find((v) => v.id === id);

  if (!vehicule) {
    return res.status(404).json({ erreur: "Véhicule introuvable" });
  }

  res.status(200).json(vehicule);
});


// POST /vehicules crée un véhicule avec disponible = true par défaut

router.post("/", (req, res) => {

  const { marque, modele, immatriculation } = req.body;

  if (!marque || !modele || !immatriculation) {
    return res.status(400).json({ erreur: "Champs obligatoires manquants" });
  }

  const nextId = vehicules.length > 0 ? Math.max(...vehicules.map((v) => v.id)) + 1 : 1;

  const nouveauVehicule = {
    id: nextId,
    marque,
    modele,
    immatriculation,
    disponible: true
  };

  vehicules.push(nouveauVehicule);
  res.status(201).json(nouveauVehicule);
});



// PATCH /vehicules/:id    modifie un ou plusieurs champs

router.patch("/:id", (req, res) => {

  const id = Number(req.params.id);
  const vehicule = vehicules.find((v) => v.id === id);

  if (!vehicule) {
    return res.status(404).json({ erreur: "Véhicule introuvable" });
  }

  const { marque, modele, immatriculation, disponible } = req.body;

  if (marque !== undefined) vehicule.marque = marque;
  if (modele !== undefined) vehicule.modele = modele;
  if (immatriculation !== undefined) vehicule.immatriculation = immatriculation;
  if (disponible !== undefined) vehicule.disponible = disponible;

  res.status(200).json(vehicule);
});


// DELETE	/vehicules/:id	supprime un véhicule

router.delete("/:id", (req, res) => {

  const id = Number(req.params.id);
  const vehicule = vehicules.find((v) => v.id === id);

  if (!vehicule) {
    return res.status(404).json({ erreur: "Véhicule introuvable" });
  }

  vehicules = vehicules.filter((v) => v.id !== id);
  res.status(204).send();
});


export default router;









