import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearCategoryLFOH = async (req, res) => {
    try {
      const { name } = req.body;
      const category = await prisma.categories.create({ data: { name } });
      res.json({ message: 'Categoría creada correctamente', category });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al crear la categoría', error: error.message });
    }
  };
  
  export const obtenerCategoriesLFOH = async (_req, res) => {
    try {
      const categories = await prisma.categories.findMany();
      if (categories.length > 0) return res.status(200).json(categories);
      return res.status(404).json({ message: 'Categorías no encontradas' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el sistema', error: error.message });
    }
  };
  
  export const buscarCategoryLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const category = await prisma.categories.findUnique({ where: { id: parseInt(id) } });
      if (category) return res.status(200).json(category);
      return res.status(404).json({ message: 'Categoría no encontrada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el sistema', error: error.message });
    }
  };
  
  export const actualizarCategoryLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const { name } = req.body;
      const existing = await prisma.categories.findUnique({ where: { id: parseInt(id) } });
      if (!existing) return res.status(404).json({ message: 'Categoría no encontrada' });
      const category = await prisma.categories.update({ where: { id: parseInt(id) }, data: { name } });
      res.json({ message: 'Categoría actualizada', category });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al actualizar la categoría', error: error.message });
    }
  };
  
  export const patchCategoryLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const updates = { ...req.body };
      const existing = await prisma.categories.findUnique({ where: { id: parseInt(id) } });
      if (!existing) return res.status(404).json({ message: 'Categoría no encontrada' });
      const category = await prisma.categories.update({ where: { id: parseInt(id) }, data: updates });
      res.json({ message: 'Categoría parcialmente actualizada', category });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al hacer patch de la categoría', error: error.message });
    }
  };
  
  export const eliminarCategoryLFOH = async (req, res) => {
    try {
      const { id } = req.params;
      const existing = await prisma.categories.findUnique({ where: { id: parseInt(id) } });
      if (!existing) return res.status(404).json({ message: 'Categoría no encontrada' });
      await prisma.categories.delete({ where: { id: parseInt(id) } });
      res.json({ message: 'Categoría eliminada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al eliminar la categoría', error: error.message });
    }
  };