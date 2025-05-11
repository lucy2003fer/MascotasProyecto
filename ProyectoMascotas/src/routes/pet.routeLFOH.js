import { Router } from 'express';
import { crearPetLFOH, obtenerPetsLFOH, buscarPetLFOH, actualizarPetLFOH, patchPetLFOH, eliminarPetLFOH } from '../controllers/pets.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";
import {upload} from "../middleware/multer.js"

const petRouter = Router();
petRouter.get('/pets', verifyJWT, obtenerPetsLFOH);
petRouter.post('/pets', verifyJWT, upload.single('photo'), crearPetLFOH);
petRouter.get('/pets/:id', verifyJWT, buscarPetLFOH);
petRouter.put('/pets/:id', verifyJWT, upload.single('photo'), actualizarPetLFOH);
petRouter.patch('/pets/:id', verifyJWT, upload.single('photo'), patchPetLFOH);
petRouter.delete('/pets/:id', verifyJWT, eliminarPetLFOH);

export default petRouter;
