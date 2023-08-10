import { useState } from "react"
import Header from "./components/Header";
import { Form } from "./components/Form";
import { Stats } from "./components/Stats";
import TodoList from "./components/TodoList";



function App() {

  const DEFAULT_TODOS=[
    {
      "id": "1",
      "title": "delectus aut autem",
      "completed": true
      },
      {
      "id": "2",
      "title": "quis ut nam facilis et officia qui",
      "completed": false
      },
      {
      "id": "3",
      "title": "fugiat veniam minus",
      "completed": false
      },
      {
      "id": "4",
      "title": "et porro tempora",
      "completed": true
      },
      {
      "id": "5",
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
      },
  ]
  const [todos, setTodos] = useState(DEFAULT_TODOS);
  

  // funciones


    const handleSubmit = (newTodo) =>{
      // event.preventDefault(); nos lo llevamos al componente de Form
      // console.log('Im working....');
      
      // const newTodo = {
      //   "id": crypto.randomUUID(), // generamos el nuevo ID irrepetible
      //   "title": input, // aca añadimos el titulo de la nueva tarea
      //   "completed": false // se setea en false
        
      // }

      setTodos([...todos, newTodo])
      // setInput('')
    }


    const handleCompleted =(event)=>{

      const isChecked = event.target.checked
      const idSelected= event.target.dataset.id

      const newTodos = todos.map(todo => {
        if (todo.id == idSelected){
          return {...todo, completed: isChecked}
        }

        return todo
      })

      console.log(newTodos)
      setTodos(newTodos)

    }


    const handleRemoveTodo = (event) => {
      const idSelected = event.target.dataset.id
  
      const newTodos = todos.filter(todo => todo.id !== idSelected)
  
      console.log(newTodos)
  
      setTodos(newTodos)
    }




    const handleClearTodos = () =>{
      const newTodos = todos.filter(todo => todo.completed === false)
      setTodos(newTodos)
    }



  return (
    <>
      <main className="w-full max-w-sm bg-red-500 mx-auto mt-10 rounded-lg p-4 shadow-lg border border-cyan-950">
          <Header></Header>
          
          
          <Form onSubmit ={handleSubmit} ></Form>

          <Stats todos = {todos}  onClearTodos = {handleClearTodos} ></Stats>


          <section className="mt-5">
          <TodoList
            todos={todos}
            onCompleted={handleCompleted}
            onRemoveTodo={handleRemoveTodo}
          />
          </section>

      </main>
    
    
    </>
    

  )
}

export default App
