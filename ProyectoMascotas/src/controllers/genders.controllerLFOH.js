import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Crear un nuevo género
export const crearGenderLFOH = async (req, res) => {
  try {
    const { name } = req.body;

    // Validación de entrada
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'El campo "name" es obligatorio y debe ser un string' });
    }

    const gender = await prisma.genders.create({
      data: { name }
    });

    res.status(201).json({ message: 'Género creado correctamente', gender });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear el género', error: 'Error interno del servidor' });
  }
};

// Obtener todos los géneros
export const obtenerGendersLFOH = async (_req, res) => {
  try {
    const genders = await prisma.genders.findMany();
    if (genders.length > 0) return res.status(200).json(genders);
    return res.status(404).json({ message: 'Géneros no encontrados' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema', error: 'Error interno del servidor' });
  }
};

// Buscar un género por ID
export const buscarGenderLFOH = async (req, res) => {
  try {
    const { id } = req.params;

    const gender = await prisma.genders.findUnique({
      where: { id: parseInt(id) }
    });

    if (gender) {
      return res.status(200).json(gender);
    }

    return res.status(404).json({ message: 'Género no encontrado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el sistema', error: 'Error interno del servidor' });
  }
};

// Actualizar un género
export const actualizarGenderLFOH = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    // Validación de entrada
    if (!name || typeof name !== 'string') {
      return res.status(400).json({ message: 'El campo "name" es obligatorio y debe ser un string' });
    }

    const existing = await prisma.genders.findUnique({ where: { id: parseInt(id) } });
    if (!existing) return res.status(404).json({ message: 'Género no encontrado' });

    const gender = await prisma.genders.update({
      where: { id: parseInt(id) },
      data: { name }
    });

    res.status(200).json({ message: 'Género actualizado', gender });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar el género', error: 'Error interno del servidor' });
  }
};

// Actualizar parcialmente un género
export const patchGenderLFOH = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };

    const existing = await prisma.genders.findUnique({ where: { id: parseInt(id) } });
    if (!existing) return res.status(404).json({ message: 'Género no encontrado' });

    const gender = await prisma.genders.update({
      where: { id: parseInt(id) },
      data: updates
    });

    res.status(200).json({ message: 'Género parcialmente actualizado', gender });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al hacer patch del género', error: 'Error interno del servidor' });
  }
};

// Eliminar un género
export const eliminarGenderLFOH = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await prisma.genders.findUnique({ where: { id: parseInt(id) } });

    if (!existing) return res.status(404).json({ message: 'Género no encontrado' });

    await prisma.genders.delete({ where: { id: parseInt(id) } });

    res.status(200).json({ message: 'Género eliminado' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar el género', error: 'Error interno del servidor' });
  }
};
