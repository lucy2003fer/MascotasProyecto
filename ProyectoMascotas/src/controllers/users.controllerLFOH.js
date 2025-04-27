import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export const crearUserLFOH = async (req, res) => {
    try {
        const { id, fullname, email, password, role } = req.body;

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.users.create({
            data: {
                id,
                fullname,
                email,
                password: hashedPassword,
                role,
            }
        });

        res.json({ message: 'Usuario creado correctamente', user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error, el cliente no se puede crear", error });
    }
};

export const obtenerUserLFOH = async (req, res) => {
    try {
        const users = await prisma.users.findMany();
        if (users.length > 0) {
            return res.status(200).json(users);
        } else {
            return res.status(404).json({ message: "Usuarios no encontrados" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema" });
    }
};

export const actualizarUserLFOH = async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, email, password, role } = req.body;

        let dataToUpdate = { fullname, email, role };

        if (password) {
            // Si envía nueva contraseña, encriptarla
            const hashedPassword = await bcrypt.hash(password, 10);
            dataToUpdate.password = hashedPassword;
        }

        const user = await prisma.users.update({
            where: { id: Number(id) },
            data: dataToUpdate
        });

        res.json({ message: "Usuario actualizado", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el usuario", error });
    }
};

export const eliminarUserLFOH = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.users.delete({
            where: { id: Number(id) },
        });

        res.json({ message: "Usuario eliminado" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el usuario", error });
    }
};

export const buscarUsersLFOH = async (req, res) => {
    try {
        const user = await prisma.users.findFirst({
            where: {
                id: parseInt(req.params.id)
            },
        });
        if (user) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: "No se puede encontrar el usuario" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Error en el sistema", error });
    }
};


export const patchUserLFOH = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = { ...req.body };

        // Si se incluye password, encriptarla
        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }

        const userExist = await prisma.users.findUnique({ where: { id: Number(id) } });
        if (!userExist) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        const user = await prisma.users.update({
            where: { id: Number(id) },
            data: updates
        });

        res.json({ message: "Usuario parcialmente actualizado", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al hacer patch del usuario", error: error.message });
    }
};