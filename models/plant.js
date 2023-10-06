const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const PlantSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
    },
    { timestamps: true },
);
//Plant refers to what we have DB and PlantSchema matches what we have in code
module.exports = mongoose.model('Plant', PlantSchema);