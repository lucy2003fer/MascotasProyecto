import { Router } from 'express';
import { crearUserLFOH, obtenerUserLFOH, actualizarUserLFOH, eliminarUserLFOH, buscarUsersLFOH  } from '../controllers/users.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";


const userRouter = Router();
userRouter.get('/user',  obtenerUserLFOH);
userRouter.post('/user',  crearUserLFOH);
userRouter.get('/user/:id',  buscarUsersLFOH);
userRouter.put('/user/:id',  actualizarUserLFOH);
userRouter.delete('/user/:id',  eliminarUserLFOH)

export default userRouter;