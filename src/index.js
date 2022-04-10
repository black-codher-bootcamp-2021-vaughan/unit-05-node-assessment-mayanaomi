require('dotenv').config();
const fs = require('fs');
const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const todoFilePath = process.env.BASE_JSON_PATH;


//Read todos from todos.json into variable
let todos = require(__dirname + todoFilePath);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.raw());
app.use(bodyParser.json());
app.use(express.static('public'))

app.use("/content", express.static(path.join(__dirname, "public")));

app.get("/", (_, res) => {
  /*
  res.sendFile("./public/index.html", { root: __dirname });
  */
  res.status(501).end();
});

app.get('/todos', (_, res) => {
  /*
  res.header("Content-Type","application/json");
  res.sendFile(todoFilePath, { root: __dirname });
  */
  res.status(501).end();
});


//Add index.html
app.get('/', (req,res) =>{
  res.status(200),res.send('root')
})
//Add GET request with path '/todos/overdue'
app.get('/todos/overdue', (req, res) =>{

});

//Add GET request with path '/todos/completed'
app.get('/todos',(req, res) =>{
  res.status(200)
  });

//Add GET request for specific id
app.get('/todos/:id', function(req,
  res){
    if (req.params.id === '01507581-9d12-a4c4-06bb-19d539a11189') {
      res.send("200");
} else {
res.status(404); //Go to the next
} });

app.get('/todos/overdue',(req,res) =>{

});

//completed todos
app.get('/todos/completed', function(req,
  res, next){
    if (req.params.completed === 'true') {
      res.status(200);
} else {
next(); //Go to the next
} });


//Add POST request with path '/todos'
app.post('/todos',(req, res) =>{
const todos = {
  id: todos.length + 1,
  name: 'Buy oatmilk x 2',
  due:'2021-11-20T18:25:43.511Z'
};
todos.push(todos);
res.send("201")
});

//Add PATCH request with path '/todos/:id
app.patch('/todos/:id', (req, res) =>{
const todos = {
  id: "19d539a11189-4a60-3a4c-4434-01507581",
  name: 'Buy 3 Cartons of Oat Milk',
  due:'2021-12-23T18:25:43.511Z'
};
res.status(200)
});

//Add POST request with path '/todos/:id/complete
app.post('/todos/:id/complete', (req, res) =>{
  const todos = {
    id: "01507581-9d12-a4c4-06bb-19d539a11189",
    complete: "true"
  };
  res.send("200")

});
//Add POST request with path '/todos/:id/undo
app.post('/todos/:id/undo', (req, res) =>{

});
//Add DELETE request with path '/todos/:id
app.delete('/todos/:id' + '01507581-9d12-a4c4-06bb-19d539a11189', (req, res) =>{
res.send(200)
});

app.listen(port, function () {
    console.log(`Node server is running... http://localhost:${port}`);
});

module.exports = app;