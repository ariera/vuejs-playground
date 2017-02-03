const Todo = new Vue({
  el: '#todo',
  data: {
    message: 'Hello Vue!',
    todos: [],
    newTodo: null,
  },
  methods:{
  	addTodo(){
  		this.todos.push(this.newTodo);
  		this.newTodo = null;
  	}
  }
})

