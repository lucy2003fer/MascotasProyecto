import { Router } from 'express';
import { crearCategoryLFOH, obtenerCategoriesLFOH, buscarCategoryLFOH, actualizarCategoryLFOH, patchCategoryLFOH, eliminarCategoryLFOH } from '../controllers/categories.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";

const categoryRouter = Router();
categoryRouter.get('/categories',  obtenerCategoriesLFOH);
categoryRouter.post('/categories',  crearCategoryLFOH);
categoryRouter.get('/categories/:id',  buscarCategoryLFOH);
categoryRouter.put('/categories/:id',  actualizarCategoryLFOH);
categoryRouter.patch('/categories/:id',  patchCategoryLFOH);
categoryRouter.delete('/categories/:id',  eliminarCategoryLFOH);

export default categoryRouter;
