import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearRaceLFOH = async (req, res) => {
  try {
    const { name } = req.body;
    const race = await prisma.races.create({ data: { name } });
    res.json({ message: 'Raza creada correctamente', race });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la raza', error: error.message });
  }
};

export const obtenerRacesLFOH = async (_req, res) => {
  try {
    const races = await prisma.races.findMany();
    if (races.length > 0) {
      return res.status(200).json(races);
    }
    return res.status(404).json({ message: 'Razas no encontradas' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el sistema', error: error.message });
  }
};

export const buscarRaceLFOH = async (req, res) => {
  try {
    const { id } = req.params;
    const race = await prisma.races.findUnique({ where: { id: parseInt(id) } });
    if (race) return res.status(200).json(race);
    return res.status(404).json({ message: 'Raza no encontrada' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error en el sistema', error: error.message });
  }
};

export const actualizarRaceLFOH = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const existing = await prisma.races.findUnique({ where: { id: parseInt(id) } });
    if (!existing) {
      return res.status(404).json({ message: 'Raza no encontrada' });
    }
    const race = await prisma.races.update({
      where: { id: parseInt(id) },
      data: { name }
    });
    res.json({ message: 'Raza actualizada', race });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al actualizar la raza', error: error.message });
  }
};

export const patchRaceLFOH = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body };
    const existing = await prisma.races.findUnique({ where: { id: parseInt(id) } });
    if (!existing) return res.status(404).json({ message: 'Raza no encontrada' });
    const race = await prisma.races.update({ where: { id: parseInt(id) }, data: updates });
    res.json({ message: 'Raza parcialmente actualizada', race });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al hacer patch de la raza', error: error.message });
  }
};

export const eliminarRaceLFOH = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await prisma.races.findUnique({ where: { id: parseInt(id) } });
    if (!existing) return res.status(404).json({ message: 'Raza no encontrada' });
    await prisma.races.delete({ where: { id: parseInt(id) } });
    res.json({ message: 'Raza eliminada' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al eliminar la raza', error: error.message });
  }
};