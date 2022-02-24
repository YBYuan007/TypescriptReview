import express, {Request, Response} from 'express';
import db from './config/database.config'; 

db.sync().then(()=>{
  console.log("connected with db")
}) 

const app = express(); 
const port = 9000; 

app.get('/', (req: Request, res: Response) => {
  return res.send("hello world"); 
})

app.listen(port, () => {console.log("who is listening?" + port)})
