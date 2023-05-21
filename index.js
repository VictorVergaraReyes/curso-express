const express=require("express")
const morgan=require("morgan")

const app=express()

app.use(morgan('dev'))

app.use((req,res,next)=>{
    console.log('paso por aqui')

    next()
})

app.use((req,res,next)=>{
    if(req.query.login=="vicvergara@gmail.com"){
        next()
    }else{
        res.send("No autorizado")
    }
})

app.get("/dashboard",(req,res)=>{
    res.send("Dashboard page")
})

app.get("/profile",(req,res)=>{
    res.send("profile page")
})

app.listen(3000)
console.log("server on port 3000")