const express = require('express');
const db = require('./db');
const logger = require('morgan');
const bodyParser = require('body-parser');
const plantController = require('./controllers/plantController');



const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

//routs
app.get('/', (req, res) => res.send('This is root!'));
app.get('/plants', plantController.getAllPlants);//get all plants
app.get('/plants/:id', plantController.getOnePlant);//get a spesific plant
app.post('/plants', plantController.createPlant);//create a plant
app.put('/plants/:id', plantController.updatePlant);//update a plant
app.delete('/plants/:id', plantController.deletePlant);//create new plant