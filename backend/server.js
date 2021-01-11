import express from 'express';
import database from './database'

const app = express();

app.get("/api/products", (req,res) =>{
    res.send(database.products);
});

app.listen(5000, () => {console.log("server started at http://localhost:5000")})