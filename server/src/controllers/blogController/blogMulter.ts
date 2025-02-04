import multer from "multer";

// multer configuration

const storage = multer.diskStorage({
   destination: (req, file, cb) => {
      cb(null, "../client/src/assets/blogs");
   },
   filename: (req, file, cb) => {
      const name = `${Date.now()}-${file.originalname}`;
      cb(null, name);
   },
});
export const uploader = multer({ storage });
