//instalações no terminal:
//1- npm init -y
//2- npm i -d typescript
//3- npx tsc --init
//4-npm i -D tsx 
//5-"start": "node --import=tsx --watch ./src/server.ts"
//6-npm i express
//7-npm i -D  @types/express

import express from "express"
import helmet from "helmet"
import path from "path"
import router from "./routes"

//instancia de express
const server = express()

server.use(helmet()) // proteger o backend http
server.use(express.json()) // habilita leitura de json
server.use(express.urlencoded({extended: true})) // suporte a formulários
// acesso a arquivos estáticos
server.use(express.static(path.join(__dirname, "../public")))


//Iniciar o servidor
server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/")
})