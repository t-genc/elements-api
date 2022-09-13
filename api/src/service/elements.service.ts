import ElementModel from "./../models/element.model"


const getElements = async (param?: object) => {
  try {
    if (!param) {
      const elements = await ElementModel.find({}, { _id: 0 })
      return elements
    }
    else {
      const elements = await ElementModel.find(param, { _id: 0 })
      return elements
    }
  }
  catch (err: any) {
    console.log(err.message);
    process.exit(1)
  }

}


export default getElements;