import { Router } from 'express';
import { crearCategoryLFOH, obtenerCategoriesLFOH, buscarCategoryLFOH, actualizarCategoryLFOH, patchCategoryLFOH, eliminarCategoryLFOH } from '../controllers/categories.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";

const categoryRouter = Router();
categoryRouter.get('/categories', verifyJWT, obtenerCategoriesLFOH);
categoryRouter.post('/categories', verifyJWT, crearCategoryLFOH);
categoryRouter.get('/categories/:id', verifyJWT, buscarCategoryLFOH);
categoryRouter.put('/categories/:id', verifyJWT, actualizarCategoryLFOH);
categoryRouter.patch('/categories/:id', verifyJWT, patchCategoryLFOH);
categoryRouter.delete('/categories/:id', verifyJWT, eliminarCategoryLFOH);

export default categoryRouter;
