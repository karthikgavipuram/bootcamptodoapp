const TodoService= require('../services/todoservices');

module.exports={
	createTodo:function(req, res){
		TodoService.createTodo(req.body)
		.then(function(todo){
			res.json(todo);
		});
	}
};