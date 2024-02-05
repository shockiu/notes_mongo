import mongoose from "mongoose";
import 'dotenv/config'
const MONGO_URI = process.env.MONGO_URI || '';
console.log(MONGO_URI);

mongoose.connect(MONGO_URI).then()
.catch((err) => {
    console.error('NOT CONNECTED TO DATABASE' ,err)
});

mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected");
});
  
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose is disconnected");
});
