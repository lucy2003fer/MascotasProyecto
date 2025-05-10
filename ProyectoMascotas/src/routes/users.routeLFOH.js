import { Router } from 'express';
import { crearUserLFOH, obtenerUserLFOH, actualizarUserLFOH, eliminarUserLFOH, buscarUsersLFOH  } from '../controllers/users.controllerLFOH.js';
import verifyJWT from "../middleware/token.controllerLFOH.js";


const userRouter = Router();
userRouter.get('/user', verifyJWT, obtenerUserLFOH);
userRouter.post('/user',  crearUserLFOH);
userRouter.get('/user/:id', verifyJWT, buscarUsersLFOH);
userRouter.put('/user/:id', verifyJWT, actualizarUserLFOH);
userRouter.delete('/user/:id', verifyJWT, eliminarUserLFOH)

export default userRouter;