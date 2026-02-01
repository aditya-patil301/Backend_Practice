// First approach to connect DB is to write a function that connect the DB in index.js which is our main file and when our application runs the index file is executed first and DB connect to the site.

// Second approach to connect DB is to write a function that connect the DB in db folder (index.js) and import that function in this index file.

// require('dotenv').config({path: './env'});

import dotenv from "dotenv";
// import mongoose from "mongoose";
// import {DB_NAME} from "./constant";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB();











/*
// FIRST APPROACH

import express from "express";
const app = express();

//Ephies - Function declared and called at instant ()()

(async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch(error){
        console.error("ERROR: ", error);
        throw error;
    }
})()
*/