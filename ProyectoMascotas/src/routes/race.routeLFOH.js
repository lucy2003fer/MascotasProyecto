import { Router } from 'express';
import { crearRaceLFOH, obtenerRacesLFOH, buscarRaceLFOH, actualizarRaceLFOH, patchRaceLFOH, eliminarRaceLFOH } from '../controllers/races.controllerLFOH.js';
import verifyJWT from "../token/token.controllerLFOH.js";


const raceRouter = Router();
raceRouter.get('/races', verifyJWT, obtenerRacesLFOH);
raceRouter.post('/races', verifyJWT, crearRaceLFOH);
raceRouter.get('/races/:id', verifyJWT, buscarRaceLFOH);
raceRouter.put('/races/:id', verifyJWT, actualizarRaceLFOH);
raceRouter.patch('/races/:id', verifyJWT, patchRaceLFOH);
raceRouter.delete('/races/:id', verifyJWT, eliminarRaceLFOH);

export default raceRouter;
