import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter);

mongoose.connect("mongodb+srv://pushkaralex6:fmBcQi9qNPXQWl51@cluster0.5jmxt14.mongodb.net/Social?retryWrites=true&w=majority").then(()=>{
    app.listen(8000, ()=>{
        console.log("listening to port 8000");
    });
    
}).catch((err)=>{
    console.log(err);
})

// fmBcQi9qNPXQWl51