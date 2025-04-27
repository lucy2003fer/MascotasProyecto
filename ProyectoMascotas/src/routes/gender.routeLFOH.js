import { Router } from 'express';
import { 
  crearGenderLFOH, 
  obtenerGendersLFOH, 
  buscarGenderLFOH, 
  actualizarGenderLFOH, 
  patchGenderLFOH, 
  eliminarGenderLFOH 
} from '../controllers/genders.controllerLFOH.js';

const genderRouter = Router();
genderRouter.get('/genders', obtenerGendersLFOH);
genderRouter.post('/genders', crearGenderLFOH);
genderRouter.get('/genders/:id', buscarGenderLFOH);
genderRouter.put('/genders/:id', actualizarGenderLFOH);
genderRouter.patch('/genders/:id', patchGenderLFOH);
genderRouter.delete('/genders/:id', eliminarGenderLFOH);

export default genderRouter;
