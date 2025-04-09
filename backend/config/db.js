import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://aayushsaini2003:Ayush022003@cluster0.gbpbsxw.mongodb.net/').then(()=> console.log("DB Connected"));
}

