import express from "express";
import {createServer}from "http" 
import { Server } from 'socket.io';
import { dirname } from "path";
import { fileURLToPath } from "url";
import onSocket from "../nodeServer/socket.js";

const port = process.env.PORT || 8080;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.get("/", (req,res) => {
    res.sendFile(__dirname+"/public/index.html");
})
app.use(express.static(__dirname+"/public"));
onSocket(io)

httpServer.listen(port, () => {
    console.log(`listening on port ${port}`);
})