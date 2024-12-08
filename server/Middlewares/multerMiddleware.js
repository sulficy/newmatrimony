const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,callback) => {
        callback(null,'./uploads')
    },
    filename:(req,file,callback) => {
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})

const multerMiddleware = multer({
    storage
})

module.exports=multerMiddleware



// const multer = require('multer');

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, './uploads'); // Ensure the 'uploads' directory exists
//     },
//     filename: (req, file, callback) => {
//         callback(null,` image-${Date.now()}-${file.originalname}`);
//     },
// });

// const multerMiddleWare = multer({ storage });

// module.exports = multerMiddleWare;

