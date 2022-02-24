import { Model, DataTypes } from "sequelize";
import db from "../config/database.config";

// Models can be defined in two equivalent ways in Sequelize:
// - Calling sequelize.define(modelName, attributes, options)
// - Extending Model and calling init(attributes, options)
// After a model is defined, it is available within sequelize.models by its model name.

interface TodoAttributes{
  id: string; 
  title: string; 
  completed: boolean 
}

// class User extends Model {}
export default class TodoInterface extends Model <TodoAttributes>{}

// User.init({
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   sequelize, // We need to pass the connection instance
//   modelName: 'User' // We need to choose the model name
// });

// // the defined model is the class itself
// console.log(User === sequelize.models.User); // true

TodoInterface.init({

  id: {
    type: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false 
  }, 

  title: {
    type: DataTypes.STRING,
    allowNull: false
  }, 

  completed: {
    type: DataTypes.BOOLEAN, 
    allowNull: false, 
    defaultValue: false 
  }

}, {
  sequelize : db, // pass the connection instance 
  modelName: 'todo'
})