import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './src/routes/users.routeLFOH.js';
import raceRouter from './src/routes/race.routeLFOH.js';
import categoryRouter from './src/routes/category.routeLFOH.js';
import genderRouter from './src/routes/gender.routeLFOH.js';
import petRouter from './src/routes/pet.routeLFOH.js';
import routerToken from "./src/token/token.routeLFOH.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(userRouter);
app.use(raceRouter);
app.use(categoryRouter);
app.use(genderRouter);
app.use(petRouter);

//token
app.use(routerToken);

app.listen(3000, () => {
    console.log('El servidor inició en el puerto 3000');
});
