import { Sequelize } from "sequelize"; 

// const db = new Sequelize('app','username','password')


// Option 2: Passing parameters separately (sqlite)
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });



// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
// });

const db = new Sequelize('app','','', {
  storage: './database.sqlite', 
  dialect: 'sqlite', 
  logging : false 
})

export default db;

