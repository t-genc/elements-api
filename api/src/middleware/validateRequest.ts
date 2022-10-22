import { Request, Response, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";



const validate=<T extends AnyZodObject>(schema:T)=>(req:Request,res:Response,next:NextFunction)=>{
   
    try{
       
      schema.parse(req.params);
     
      next()
    }
    catch(e){
        if(e instanceof ZodError){
             res.status(400).json({success:false,error:e.flatten()})
        }
        else res.status(400).json({success:false,error:e})    
    }

}

export default validate