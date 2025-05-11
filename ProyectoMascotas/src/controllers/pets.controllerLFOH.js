import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crearPetLFOH = async (req, res) => {
  try {
    const { race_id, category_id, name, state, gender_id, user_id } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: "pon imagen" })
    }

    const imgname = req.file.filename

    const pet = await prisma.pets.create({
      data: { race_id: parseInt(race_id), category_id: parseInt(category_id), photo: `/pets/${imgname}`, name: name, state: state, gender_id: parseInt(gender_id), user_id: parseInt(user_id) }
    });
    res.json({ message: 'Mascota creada correctamente', pet });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la mascota', error: error.message });
  }
};

export const obtenerPetsLFOH = async (_req, res) => {
  try {
    const pets = await prisma.pets.findMany({
      include: {
        races: true
      }
    });

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

    if (!req.file) {
      return res.status(400).json({ message: "pon imagen" })
    }

    const imgname = req.file.filename

    const existing = await prisma.pets.findUnique({ where: { id: parseInt(id) } });
    if (!existing) return res.status(404).json({ message: 'Mascota no encontrada' });
    const pet = await prisma.pets.update({
      where: { id: parseInt(id) },
      data: { race_id: parseInt(race_id), category_id: parseInt(category_id), photo: `/pets/${imgname}`, name: name, state: state, gender_id: parseInt(gender_id), user_id: parseInt(user_id) }
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
    const existing = await prisma.pets.findUnique({ where: { id: parseInt(id) } });
    if (!existing) return res.status(404).json({ message: 'Mascota no encontrada' });

    // Preparar las actualizaciones
    const updates = { ...req.body };

    // Si se subió una nueva imagen, actualizar la ruta
    if (req.file) {
      updates.photo = `/pets/${req.file.filename}`;
    }

    // Convertir campos numéricos si existen
    if (updates.race_id) updates.race_id = parseInt(updates.race_id);
    if (updates.category_id) updates.category_id = parseInt(updates.category_id);
    if (updates.gender_id) updates.gender_id = parseInt(updates.gender_id);
    if (updates.user_id) updates.user_id = parseInt(updates.user_id);

    const pet = await prisma.pets.update({
      where: { id: parseInt(id) },
      data: updates
    });

    res.json({ message: 'Mascota parcialmente actualizada', pet });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Error al hacer patch de la mascota',
      error: error.message
    });
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
