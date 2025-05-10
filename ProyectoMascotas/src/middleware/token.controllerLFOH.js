import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

export const prisma = new PrismaClient();

dotenv.config();

// Login de usuarios
export const tokenUsersLFOH = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await prisma.users.findUnique({
            where: { email },
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const passwordValida = await bcrypt.compare(password, user.password);

        if (!passwordValida) {
            return res.status(401).json({ message: "Contraseña incorrecta" });
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            process.env.AUTH_SECRET,
            { expiresIn: process.env.AUTH_EXPIRES || "1h" }
        );

        return res.status(200).json({ message: "Usuario autenticado", token });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Error al autenticar usuario" });
    }
};

// Middleware de verificación de token
const verifyJWT = async (req, res, next) => {
    try {
        const token = req.headers["authorization"]?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ msg: "Token no proporcionado" });
        }

        const verified = jwt.verify(token, process.env.AUTH_SECRET);
        if (!verified) {
            return res.status(401).json({ msg: "Token inválido" });
        }

        req.user = verified; // Aquí se guarda el usuario en el request
        next();
    } catch (error) {
        console.error("Error en JWT:", error);

        let msg = "Error en la autenticación";

        if (error.name) {
            switch (error.name) {
                case "JsonWebTokenError":
                    msg = "Token inválido";
                    break;
                case "TokenExpiredError":
                    msg = "Token expirado";
                    break;
                case "NotBeforeError":
                    msg = "Token aún no es válido";
                    break;
            }
        }

        res.status(401).json({ msg });
    }
};

export default verifyJWT;
