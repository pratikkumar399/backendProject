import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        // null is for errors
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        // originalname is the name of the file on the user's computer
        cb(null, file.originalname);
    }
});

export const upload = multer({ storage });