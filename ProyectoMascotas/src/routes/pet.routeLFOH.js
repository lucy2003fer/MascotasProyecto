import { Router } from 'express';
import { 
  crearPetLFOH, 
  obtenerPetsLFOH, 
  buscarPetLFOH, 
  actualizarPetLFOH, 
  patchPetLFOH, 
  eliminarPetLFOH 
} from '../controllers/pets.controllerLFOH.js';

const petRouter = Router();
petRouter.get('/pets', obtenerPetsLFOH);
petRouter.post('/pets', crearPetLFOH);
petRouter.get('/pets/:id', buscarPetLFOH);
petRouter.put('/pets/:id', actualizarPetLFOH);
petRouter.patch('/pets/:id', patchPetLFOH);
petRouter.delete('/pets/:id', eliminarPetLFOH);

export default petRouter;
