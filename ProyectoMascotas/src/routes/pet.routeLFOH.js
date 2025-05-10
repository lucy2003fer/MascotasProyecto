import { Router } from 'express';
import { crearPetLFOH, obtenerPetsLFOH, buscarPetLFOH, actualizarPetLFOH, patchPetLFOH, eliminarPetLFOH } from '../controllers/pets.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";
import {upload} from "../middleware/multer.js"

const petRouter = Router();
petRouter.get('/pets',  obtenerPetsLFOH);
petRouter.post('/pets',  upload.single('photo'), crearPetLFOH);
petRouter.get('/pets/:id',  buscarPetLFOH);
petRouter.put('/pets/:id',  upload.single('photo'), actualizarPetLFOH);
petRouter.patch('/pets/:id',  upload.single('photo'), patchPetLFOH);
petRouter.delete('/pets/:id',  eliminarPetLFOH);

export default petRouter;
