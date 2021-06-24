import { Server } from "./server";
const serve = new Server();
serve.listen((port: any) =>{
    console.log(`le port de lancement est  :`, port)
});