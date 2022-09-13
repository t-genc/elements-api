import  {Schema,model,Document} from "mongoose";



 export interface ElementDoc extends Document{
    atomicNumber: number,
    symbol: string,
    name: string,
    weight: string,
    electronegativity: string,
    atomicRadius: string,
    ionRadius: string,
    vanDerWaalsRadius: string,
    ionizationEnergy: string,
    electronAffinity: string,
    standardState: string,
    bondingType: string,
    meltingPoint:string,
    boilingPoint: string,
    density: string,
    groupBlock: string,
    yearDiscovered: string,
    block: string,
    hexColor: string,
    period: number,
    group: number
};

const userSchema=new Schema<ElementDoc>({

    atomicNumber:{type:Number,required:true,unique:true},
    symbol: {type:String,required:true,unique:true},
    name:{type:String,required:true,unique:true} ,
    weight: {type:String,required:true},
    electronegativity: {type:String,required:true},
    atomicRadius: {type:String,required:true},
    ionRadius: {type:String,required:true},
    vanDerWaalsRadius: {type:String,required:true},
    ionizationEnergy: {type:String,required:true},
    electronAffinity: {type:String,required:true},
    standardState: {type:String,required:true},
    bondingType:{type:String,required:true},
    meltingPoint:{type:String,required:true},
    boilingPoint:{type:String,required:true},
    density: {type:String,required:true},
    groupBlock: {type:String,required:true},
    yearDiscovered: {type: String,required:true},
    block: {type:String,required:true},
    hexColor: {type:String,required:true},
    period: {type:Number,required:true},
    group: {type:Number,required:true},
    
},{
    timestamps:false,
    versionKey:false
}
)

const ElementModel=model<ElementDoc>("Element",userSchema)


export default ElementModel;