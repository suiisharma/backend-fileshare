import  express  from "express";
import router from "./Routes/routes.js";
import cors from "cors";
import DBconnection from "./database/db.js";


const app=express();
app.use(cors());
app.use('/',router);

const port =8000;
DBconnection();

app.listen(8000,()=>{
    console.log("server running ");
})
