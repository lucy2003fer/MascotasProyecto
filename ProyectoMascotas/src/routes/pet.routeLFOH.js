import { Router } from 'express';
import { crearPetLFOH, obtenerPetsLFOH, buscarPetLFOH, actualizarPetLFOH, patchPetLFOH, eliminarPetLFOH } from '../controllers/pets.controllerLFOH.js';
import verifyJWT from "../token/token.controllerLFOH.js";

const petRouter = Router();
petRouter.get('/pets', verifyJWT, obtenerPetsLFOH);
petRouter.post('/pets', verifyJWT, crearPetLFOH);
petRouter.get('/pets/:id', verifyJWT, buscarPetLFOH);
petRouter.put('/pets/:id', verifyJWT, actualizarPetLFOH);
petRouter.patch('/pets/:id', verifyJWT, patchPetLFOH);
petRouter.delete('/pets/:id', verifyJWT, eliminarPetLFOH);

export default petRouter;
