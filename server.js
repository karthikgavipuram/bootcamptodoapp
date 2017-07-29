const express = require('express');
const cors =require('cors');
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser');

require('./ToDoModels/Todo');
const TodoController = require('./controller/TodoController')

const PORT = process.env.PORT || 8000;
const app = express();
let mangodbURL = 'mongodb://admin:admin@ds127173.mlab.com:27173/mongoboot';

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.use(cors());

mongoose.Promise= global.Promise;
mongoose.connect(mangodbURL,{
	useMongoClient:true
});

app.route('/')
	.get(function(req , res){
		return res.json({
			message:'welcome to recuiter box'
		})
	})
	.post(function(req,res){
		return TodoController.createTodo(req, res);
	});
app.listen(PORT);	
console.log(`server started:${PORT}`);