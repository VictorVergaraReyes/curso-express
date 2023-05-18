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

// app.get("/user",(req,res)=>{
//     res.json({"name":"victor"})})

app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post('/user',(req,res)=>{
    console.log(req.body)
    res.send("Nuevo usuario creado")
})

app.get('/hello/:username',(req,res)=>{
    console.log(req.params.username)
    res.send(`HELLO ${req.params.username.toUpperCase()}`)
})


app.get("/add/:x/:y",(req,res)=>{
    console.log(req.params.x)
    console.log(req.params.y)
    result=parseInt(req.params.x)+parseInt(req.params.y)
    res.send(`Result ${result}`)
})

app.listen(3000)
console.log("server on port 3000")

app.use((req,res)=>{
    res.status(404).send("No se encontro, error 404");
})

