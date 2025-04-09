import mongoose from "mongoose";


export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://aayushsaini2003:Ayush022003@cluster0.gbpbsxw.mongodb.net/test?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true').then(()=> console.log("DB Connected"));
}

