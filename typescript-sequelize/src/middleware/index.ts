import {Request, Response, NextFunction} from "express";
import { validationResult } from "express-validator";

class Middleware {
  handleValidationError(req: Request, res: Response, next: NextFunction) {
    const error = validationResult(req); 
    // console.log("error is this ", error);
    if(!error.isEmpty()) {
      return res.json(error);
    } 
    next(); 
  }
}

export default new  Middleware();