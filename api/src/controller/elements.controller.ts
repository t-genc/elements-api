import { Request, Response } from "express"

import getElements from "../service/elements.service"


const getElementsHandler = async (req: Request, res: Response) => {

  try {
    if (req.path === "/") {

      const data = await getElements();

      return res.json(data);
    }
    else {

      const data = await getElements(req.params);
      return res.json(data)
    }

  }
  catch (e) {
    throw e;
  }
}

export {
  getElementsHandler,
}