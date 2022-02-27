import { body, query } from "express-validator";

class TodoValidator {
  checkCreateTodo() {
    // create the function
    return [
      body(["id"]).optional().isUUID(4).withMessage("it is not a valid uuid4 id"),
      body("title").notEmpty().withMessage("Must provide a title"),
      body("completed")
        .optional()
        .isBoolean()
        .withMessage("it has to be boolean")
        .isIn([0, false])
        .withMessage("it should be incomplete "),
    ];
  }

  checkReadTodo () {
    return [
      query("limit").notEmpty().withMessage("The query limit should not be empty")
      .isInt({min:1, max:10}).withMessage("the limit should be integer and should be 1-10")
    ]
  }
}

export default new TodoValidator(); // export the object of this class
