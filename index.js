// const http=require("http")
// const fs=require("fs")

// const server=http.createServer((req,res)=>{
//     const read=fs.createReadStream("./static/index.html")
//     read.pipe(res)
// })

// server.listen(3000)
// console("server on port 3000");

const express=require("express")

const app=express()

app.get("/",(req,res)=>{
    res.send("Hello world")
})

app.get("/imagen",(req,res)=>{
    res.sendFile("./static/img/bote de pintura.png",{
        root:__dirname
    })
})

app.get("/user",(req,res)=>{
    res.json({"name":"victor"})})

app.get("/about",(req,res)=>{
    res.send("About")
})

app.get("/weather",(req,res)=>{
    res.send("The current weather is Nice")
})

app.post("/products",(req,res)=>{
    res.send("Lista de productos")
})

app.put("/products",(req,res)=>{
    res.send("Lista de productos")
})

app.delete("/products",(req,res)=>{
    res.send("Eliminando un producto")
})

app.patch("/products",(req,res)=>{
    res.send("Actualizando una parte del producto")
})

app.listen(3000)
console.log("server on port 3000")

app.use((req,res)=>{
    res.status(404).send("No se encontro, error 404");
})

