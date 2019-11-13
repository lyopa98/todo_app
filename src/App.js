import React from 'react';
import TodoList from './Todo/TodoList.js'
import Context from './context.js'
import AddTodo from './Todo/AddTodo'


function App() {
  const [todos,setTodos] = React.useState([
    {id:1, completed:false, title:"Убрать комнату"},
    {id:2, completed:true, title:"Помыть комнату"},
    {id:3, completed:false, title:"Купить комнату"},
    {id:4, completed:false, title:"Продать комнату"}
  ]);


  //изменяем completed 
  function toggleTodo(id){
    //console.log(id)
    setTodos(todos.map(todo =>{
        if(todo.id === id){
          todo.completed =!todo.completed 
        }
        return todo
      })
    )
  }

  function removeTodo(id){
    console.log(id)
    setTodos(todos.filter(todo => todo.id !==id ))
  }

  function addTodo(title){
    setTodos(todos.concat([{
      title,
      id:Date.now(),
      completed:false
    }]))
  }

  return (
    <Context.Provider value ={{ removeTodo:removeTodo }}>
      <div className='wrapper' >
        <h1>React Todo</h1>
        
        {todos.length ?
         <TodoList todosArr = {todos} onToggle={toggleTodo}></TodoList>:<p>Список пуст</p>}
        <AddTodo onCreate = {addTodo}></AddTodo>
      </div>
    </Context.Provider>
  );
}

export default App;
