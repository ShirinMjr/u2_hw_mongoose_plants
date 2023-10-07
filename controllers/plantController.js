const Plant = require('../models/plant');
module.exports = {
    getAllPlants,
    getOnePlant,
    createPlant,
    updatePlant,
    deletePlant
};

async function getAllPlants(req, res) {
    try {
        const PORT = process.env.PORT || 3001;

        const plants = await Plant.find();
        return res.json(plants);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

async function getOnePlant(req, res) {
    try {
        const id = req.params.id;
        const plant = await Plant.findById(id);
        return plant ? res.json(plant) : res.status(404).send(`plannt with spesific ID does not exist `);
    } catch (error) {

        return res.status(500).send(error.message);
    }
}

//post
async function createPlant(req, res) {
    try {
        const plant = await new Plant(req.body);
        await plant.save();
        return res.status(201).json({ plant });
    } catch (error) {

        return res.status(500).send(error.message);
    }
}

//put
async function updatePlant(req, res) {
    try {
        const id = req.params.id;
        const plant = await Plant.findByIdAndUpdate(id, req.body, { new: true });
        if (plant) {
            return res.status(200).json(plant);
        }
        throw new Error("Plant not found");
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

async function deletePlant(req, res) {
    try {
        const id = req.params.id;
        let plant = await Plant.findByIdAndDelete(id);
        if (plant) {
            return res.status(200).json(plant);
        }

    } catch (error) {

        return res.status(500).send(error.message);
    }
}


