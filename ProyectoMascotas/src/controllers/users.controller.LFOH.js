import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearUserLFOH = async (req, res) => {
    try {
        const user = await prisma.Users.create({ data: req.body });
        res.json({ message: 'Usuario creado correctamente', user });
    } catch (error) {
        res.status(500).json({ message: "Error, el cliente no se puede crear", error })
    }
};

export const obtenerUserLFOH = async (req, res) => {
    try {
        const user = await prisma.User.findMany();
        if (user.length > 0) {
            return res.status(200).json(user);
        } else {
            return res.status(404).json({ message: "clientes no encontrados" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "error en el sistema" });
    }
};

export const actualizarUserLFOH = async (req, res) => {
    try {
        const { id } = req.params;
        const { fullname, email, password, role } = req.body;

        const user = await prisma.Users.update({
            where: { id: Number(id) },
            data: { fullname, email, password, role }
        });

        res.json({ message: "usuario actualizado", user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "error al obtener los usuarios", error });
    }
};


export const eliminarUserLFOH = async (req, res) => {
    try {
        const { id } = req.params;

        await prisma.Users.delete({
            where: { id: Number(id) },
        });

        res.json({ message: "usuario eliminado" });
    } catch (error) {
        res.status(500).json({ message: "error al eliminar el usuario" })
    }
};

export const buscarUsersLFOH = async (req, res) => {
    try {
        const user = await prisma.Users.findFirst({
            where: {
                id: parseInt(req.params.id)
            },
        });
        if (buscarUsersLFOH) {
            return res.status(200).json({ buscarUsersLFOH })
        } else {
            return res.status(400).json({ message: "no se puede encontrar el usuario" })
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "error en el sistema" })

    }
};