//npm run dev
//mongod
import express from "express";
import morgan from "morgan";
import indexRoute from "./routes/index";
import path from 'path'

const app = express();

//settings
app.set('port', process.env.PORT || 4000); 

//middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/api',indexRoute);

//this folder for this application will be used to store public files
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;