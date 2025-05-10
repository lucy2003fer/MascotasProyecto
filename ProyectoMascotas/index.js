import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './src/routes/users.routeLFOH.js';
import raceRouter from './src/routes/race.routeLFOH.js';
import categoryRouter from './src/routes/category.routeLFOH.js';
import genderRouter from './src/routes/gender.routeLFOH.js';
import petRouter from './src/routes/pet.routeLFOH.js';
import routerToken from "./src/middleware/token.routeLFOH.js";

import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); 

app.use("/pets", express.static(path.join("public","pets")));

// Cargar el archivo de configuración de Swagger
const swaggerDocument = YAML.load('./src/docs/swagger.yaml');

// Middleware para servir Swagger UI
app.use('/api/document', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use('/api/',userRouter);
app.use('/api/',raceRouter);
app.use('/api/',categoryRouter);
app.use('/api/',genderRouter);
app.use('/api/',petRouter);

//token
app.use('/api/',routerToken);


app.listen(3000, () => {
    console.log('El servidor inició en el puerto 3000');
    console.log(`Documentación disponible en http://localhost:3000/api/document`);
});
