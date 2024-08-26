import express, {Request, Response} from 'express';
import 'dotenv/config';
import cors from 'cors'

// create app
const app = express();

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get("/test/api", (req : Request, res: Response)=>{
    res.json({message: "Hello from node server"})
})

app.listen(7000, ()=>{
    console.log("server is listening at localhost:7000")
})
