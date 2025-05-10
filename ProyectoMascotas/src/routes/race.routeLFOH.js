import { Router } from 'express';
import { crearRaceLFOH, obtenerRacesLFOH, buscarRaceLFOH, actualizarRaceLFOH, patchRaceLFOH, eliminarRaceLFOH } from '../controllers/races.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";


const raceRouter = Router();
raceRouter.get('/races', obtenerRacesLFOH);
raceRouter.post('/races', crearRaceLFOH);
raceRouter.get('/races/:id', buscarRaceLFOH);
raceRouter.put('/races/:id', actualizarRaceLFOH);
raceRouter.patch('/races/:id', patchRaceLFOH);
raceRouter.delete('/races/:id', eliminarRaceLFOH);

export default raceRouter;
