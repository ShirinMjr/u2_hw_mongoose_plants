const Plant = require('../models/plant');


const getAllPlants = async (req, res) => {
    try {
        const PORT = process.env.PORT || 3001;

        const plants = await Plant.find();
        return res.json(plants);

    } catch (error) {
        return res.status(500).send(error.message);
    }
};

module.exports = { getAllPlants };