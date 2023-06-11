const express=require("express")
const { connection } = require("./db")
const cors=require("cors")
const { userRouter } = require("./routes/user.routes")
const { logged } = require("./middleware/logged")

require("dotenv").config()
const app=express()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.send("Home page")
})



app.use("/users",userRouter)


app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to the db")
    }
    catch(error){
        console.log(error)
        console.log("not connected to the db")
    }
    console.log("server running at the port 8080")
})