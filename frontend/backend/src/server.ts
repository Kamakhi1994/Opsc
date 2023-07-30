import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { dbconnect } from './configs/database.config';
import panelrouter from './Router/panel.router';
dbconnect();
export const app=express()

app.use(express.json())
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.use("/panel",panelrouter)


app.get("/",(req,res)=>{
    res.send("hello world")
})
const port=5000;
app.listen(port,()=>{
    console.log("Website served on port" + port)
    
})
