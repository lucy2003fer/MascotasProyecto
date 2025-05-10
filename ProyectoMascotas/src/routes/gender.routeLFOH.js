import { Router } from 'express';
import { crearGenderLFOH,  obtenerGendersLFOH, buscarGenderLFOH, actualizarGenderLFOH, patchGenderLFOH, eliminarGenderLFOH } from '../controllers/genders.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";

const genderRouter = Router();
genderRouter.get('/genders', verifyJWT, obtenerGendersLFOH);
genderRouter.post('/genders', verifyJWT, crearGenderLFOH);
genderRouter.get('/genders/:id', verifyJWT, buscarGenderLFOH);
genderRouter.put('/genders/:id', verifyJWT, actualizarGenderLFOH);
genderRouter.patch('/genders/:id', verifyJWT, patchGenderLFOH);
genderRouter.delete('/genders/:id', verifyJWT, eliminarGenderLFOH);

export default genderRouter;
