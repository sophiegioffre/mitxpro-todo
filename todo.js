const Todo = ({todo, index, remove}) => {
  const key = todo.id;

  const checkTodo = () => {
    console.log(todo);
    console.log(">>>>>>>" + todo.id);
    if (todo.isCompleted === false) {
      todo.isCompleted = true;
      document.getElementById(key).style.textDecoration = 'line-through'; 
    }else if (todo.isCompleted === true) {
      todo.isCompleted = false;
      document.getElementById(key).style.textDecoration = 'none'; 
    }
    console.log(`${todo.task} is completed: ${todo.isCompleted}`);
  };

  const handleRemove = () => {
    console.log('Ping:', index);
    remove(index);
  };

  

  return (
  <div className="todo">
    <div className="task" id={key}>{todo.text}</div>
    <div className="todo-buttons">
      <input type="checkbox" onClick={checkTodo}></input>
      <button id="delete" type="button" className="btn btn-light" onClick={handleRemove}>delete</button>
    </div>
  </div>
  );
}
