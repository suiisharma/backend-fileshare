import mongoose from "mongoose";

const fileScema=new mongoose.Schema(
    {
        path:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        downloadContent:{
            type:Number,
            required:true,
            default:0
        }
    }
)

const File=mongoose.model('file',fileScema);
export default File;