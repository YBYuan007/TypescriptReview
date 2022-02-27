import { body } from "express-validator";

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
}

export default new TodoValidator(); // export the object of this class
