import { Router } from 'express';
import { crearUserLFOH, obtenerUserLFOH, actualizarUserLFOH, eliminarUserLFOH, buscarUsersLFOH  } from '../controllers/users.controller.LFOH';

const userRouter = Router();
userRouter.post('/user', crearUserLFOH);
userRouter.get('/user', obtenerUserLFOH);
userRouter.get('/user/:id', buscarUsersLFOH);
userRouter.put
