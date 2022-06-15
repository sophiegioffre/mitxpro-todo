const App = () => {
  const [todos, setTodos] = React.useState([
    {id: 1, text: 'learn react', isCompleted: false},
    {id:2, text: 'meet friend for lunch', isCompleted: false},
    {id:3, text: 'build todo app', isCompleted: false}        
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {id: todos.length + 1, text, isCompleted: false}];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    console.log(index);
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  };

  return(
    <div className="app">
      <h1 className="title">ToDo...</h1>
      <div className="todo-list" >
        {todos.map((todo, i) => (
          <Todo key={todo.id} index={i} todo={todo} isCompleted={todo.isCompleted} remove={removeTodo}/>
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
