import mongoose from "mongoose";
import config from "config";

const dbUrl=config.get<string>("dbUrl");

export default function connect(){

  
  return mongoose.connect(dbUrl)
  .then(()=>{
     console.info("connected to db")
  })
  .catch(err=>{
      console.error("Error occured while connecting to db: %s",err)
      process.exit(1)
  })
  

}
