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


app.use('/api/',userRouter);
app.use('/api/',raceRouter);
app.use('/api/',categoryRouter);
app.use('/api/',genderRouter);
app.use('/api/',petRouter);

//token
app.use('/api/',routerToken);

app.get('*', (req, res) => {
    res.sendFile(path.join(process.cwd(), 'public/index.html'));
  });

app.listen(3000, () => {
    console.log('El servidor inició en el puerto 3000');
});
