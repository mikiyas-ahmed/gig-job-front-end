import React from "react";
// import TodoList from "../../TodoList";
// import newid from "../../utils/newid";
// import Button  from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
// import { NavItem } from "react-bootstrap";
import LoginForm from '../login_page/LoginForm.js'

// const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Project() {
  // const [todos, setTodos] = useState([])
  // const todoNameref = useRef();
  // const passwordref = useRef();

//   useEffect(() => {
//     const storedTodos = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY))
//     if(storedTodos) setTodos(storedTodos)
//   },[])

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
//   },[todos])

  // function toggleTodo(id){
  //   const newTodos = [...todos]
  //   const todo = newTodos.find(todo => todo.id ===id)
  //   todo.complete = ! todo.complete
  //   setTodos(newTodos)
  // }
  // const logInDetails = {
  //   email: '',
  //   password: ''
  // }
  // function handleAddTodo(event){
  //   console.log(todoNameref.current.value, passwordref.current.value)
    // fetch('http://localhost', {
    //   body: {
    //     email: todoNameref,
    //     password: passwordref
    //   }
    // })
  //   const name = todoNameref.current.value
  //     if(name === '') return
  //     setTodos(preTodos => {
  //       return [...preTodos,{id:newid() ,name:name,complete:false}]
  //     })
  //     todoNameref.current.value = null
  // }

  // function handleClearTodo(){
  //   const newTodos = todos.filter(todo => !todo.complete)
  //   setTodos(newTodos)
  // }

  
  return (
    <>
    <div>
      {/* <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameref} type="text"/>
      <input ref={passwordref} type="text"/>
      <Button variant="primary" onClick={handleAddTodo}>Add Todo</Button>{''}
      <Button variant="secondary" onClick={handleClearTodo}>Clear Complete</Button>{''}
      <div>{todos.filter(todo => !todo.complete).length} left Todo</div>
      <JobAddForm/> */}
      <LoginForm/>
    </div>
    </>
  );
}
export default Project;