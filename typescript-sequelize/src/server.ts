import express, { NextFunction, Request, Response } from "express";
import db from "./config/database.config";
import { v4 as uuidv4 } from "uuid";
import TodoInterface from "./model";
import TodoValidator from "./validator";
// import { validationResult } from "express-validator";
import Middleware from "./middleware";

db.sync().then(() => {
  console.log("connected with db");
});

const app = express();
const port = 9000;

// app.get('/', (req: Request, res: Response) => {
//   return res.send("hello world");
// })
app.use(express.json());

// create a todo
app.post(
  "/create",
  TodoValidator.checkCreateTodo(),
  Middleware.handleValidationError,
  async (req: Request, res: Response) => {
    const id = uuidv4();
    try {
      const createTodo = await TodoInterface.create({ ...req.body, id });
      // console.log("find the middleware?", req.body) //undefined--> need middleware
      // return res.send(createTodo);
      return res.json({ createTodo, msg: "Successfully created a record" }); //The res.json() function sends a JSON response.
    } catch (err) {
      return res.json({
        msg: " failed to create a record",
        status: 500,
        route: "/create",
      });
    }
  }
);

// read

app.get(
  "/read",
  TodoValidator.checkReadTodo(),
  Middleware.handleValidationError,
  async (req: Request, res: Response) => {
    const limit = req.query.limit as number | undefined;
    try {
      const records = await TodoInterface.findAll({limit: limit });
      // console.log("find the middleware?", req.body) //undefined--> need middleware
      // return res.send(createTodo);
      return res.json({ records, msg: "find records" }); //The res.json() function sends a JSON response.
    } catch (err) {
      return res.json({
        msg: " failed to find records",
        status: 500,
        route: "/read",
      });
    }
  }
);

// update

// delete

app.listen(port, () => {
  console.log("who is listening?" + port);
});
