const express = require('express');
const cors = require('cors');
const { connetMongoose } = require("./connectMongo/todoMongoose");

//import routes
const todoRouter = require('./routes/todos');
const listRouter = require('./routes/lists')

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cors());

// connect Mongoo
connetMongoose(
  "mongodb+srv://sumit21:Sumit123@cluster0.kpmct6i.mongodb.net/todos"
).then(() => {
  console.log("Mongoo connected");
});

//route middleware
app.use('/api/todo', todoRouter);
app.use('/api/list', listRouter)


//listen port
app.listen(3000, ()=> console.log("server started at port 3000"));
