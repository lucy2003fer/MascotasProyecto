import { Router } from "express";
import { tokenUsersLFOH } from "./token.controllerLFOH.js"; // <-- ahora usando el de users

const routerToken = Router();

routerToken.post("/login", tokenUsersLFOH); // <-- login para users

export default routerToken;
