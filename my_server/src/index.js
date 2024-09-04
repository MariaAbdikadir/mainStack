import express from "express"
import dotenv from 'dotenv/config'
import router from '../routes/userRouter.js'
import mongoose from "mongoose"
import cors from "cors"

const app = express()
const PORT = process.env.PORT || 6000

app.use(express.json())
app.use(cors())
app.use('/',router)

mongoose.connect(process.env.DB_CON_URL).then(()=>console.log("db connected"))



app.listen(PORT, ()=> console.log(`server is running ON ${PORT}`))

// dotenv