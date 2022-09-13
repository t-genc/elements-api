import fs from "fs"
import mongoose from "mongoose"
import ElementModel from "../../models/element.model"
import path from "path"
import connect from "./connect"



const seedDb=async ()=>{
    await connect();

    let data=fs.readFileSync(path.join(process.cwd(),"data","elements.json"),"utf-8");
    data=JSON.parse(data)

    try {
        await ElementModel.deleteMany({})
        await ElementModel.insertMany(data)
        console.log("db successfully updated")

    }
    catch(e){
        console.error(e)

    }
    finally{
        mongoose.connection.close()
    }
      
}

seedDb()