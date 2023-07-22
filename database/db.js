import mongoose from "mongoose";

const mongodb_Uri='mongodb+srv://sourav:{Ss3818>@notes.dnmltlb.mongodb.net/';


const DBconnection=async()=>{
    try {
      await  mongoose.connect(mongodb_Uri,{useNewUrlParser:true});
        console.log("database connected");
    } catch (error) {
        console.log("Error in database connection ",error.message);
    }
}

export default DBconnection;