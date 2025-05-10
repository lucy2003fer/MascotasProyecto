import multer from "multer";
import path from "path";

// Definimos el almacenamiento
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join("public", "pets")); // Carpeta donde se guardan
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname); // Extrae la extensión (.jpg, .png)
    cb(null, uniqueSuffix + ext); // Ej: 1746378662959-424814978.png
  },
});

// Creamos el middleware de multer
export const upload = multer({ storage });