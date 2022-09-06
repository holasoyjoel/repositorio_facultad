require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const cors = require("cors");
const mongoose = require("mongoose");
const router = express.Router();


app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DATA_URL)
.then(()=>{
    console.log("DB connected");
    app.listen(port , ()=>{
        console.log("server corriendo en puerto", port);
    })
})
.catch((err)=>{
    console.log("error al conectar a la base de datos");
    console.log(err);
})


