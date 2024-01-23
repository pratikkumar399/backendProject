// require('dotenv').config({ path: './.env' });

import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });

connectDB();





// one way to do it
// import express from 'express';
// const app = express();
// // connect to mongoDB
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error", (err) => {
//             console.error(err);
//         });
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//         });
//     }
//     catch (err) {
//         console.error(err);
//         throw err;
//     }
// })();
