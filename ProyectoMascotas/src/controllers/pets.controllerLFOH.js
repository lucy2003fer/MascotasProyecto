import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearPetLFOH = async (req, res) => {
    try {
      const { race_id, category_id, photo, name, state, gender_id, user_id } = req.body;
      const pet = await prisma.pets.create({
        data: { race_id, category_id, photo, name, state, gender_id, user_id }
      });
      res.json({ message: 'Mascota creada correctamente', pet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la mascota', error: error.message });
    }
  };
  
  export const obtenerPetsLFOH = async (_req, res) => {
    try {
      const pets = await prisma.pets.findMany();
      if (pets.length > 0) return res.status(200).json(pets);
      return res.status(404).json({ message: 'Mascotas no encontradas' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el sistema', error: error.message });
    }
  };
  
  export const buscarPetLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const pet = await prisma.pets.findUnique({ where: { id: parseInt(id) } });
      if (pet) return res.status(200).json(pet);
      return res.status(404).json({ message: 'Mascota no encontrada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el sistema', error: error.message });
    }
  };
  
  export const actualizarPetLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const { race_id, category_id, photo, name, state, gender_id, user_id } = req.body;
      const existing = await prisma.pets.findUnique({ where: { id: parseInt(id) } });
      if (!existing) return res.status(404).json({ message: 'Mascota no encontrada' });
      const pet = await prisma.pets.update({
        where: { id: parseInt(id) },
        data: { race_id, category_id, photo, name, state, gender_id, user_id }
      });
      res.json({ message: 'Mascota actualizada', pet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar la mascota', error: error.message });
    }
  };
  
  export const patchPetLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const updates = { ...req.body };
      const existing = await prisma.pets.findUnique({ where: { id: parseInt(id) } });
      if (!existing) return res.status(404).json({ message: 'Mascota no encontrada' });
      const pet = await prisma.pets.update({ where: { id: parseInt(id) }, data: updates });
      res.json({ message: 'Mascota parcialmente actualizada', pet });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al hacer patch de la mascota', error: error.message });
    }
  };
  
  export const eliminarPetLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const existing = await prisma.pets.findUnique({ where: { id: parseInt(id) } });
      if (!existing) return res.status(404).json({ message: 'Mascota no encontrada' });
      await prisma.pets.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Mascota eliminada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar la mascota', error: error.message });
    }
  };
  