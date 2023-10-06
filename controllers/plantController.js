const Plant = require('../models/plant');


const getAllPlants = async (req, res) => {
    try {
        const PORT = process.env.PORT || 3001;

    } catch (err) {
        return res.status(500).send(err.message);
    }
};

module.exports = { getAllPlants };