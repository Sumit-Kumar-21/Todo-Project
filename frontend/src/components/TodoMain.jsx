import { useEffect, useState } from "react";
import CreateTodo from "./CreateTodo";
import Todo from "./Todo";

function TodoMain() {
  const [todos, setTodos] = useState([]);

  async function render() {
    const response = await fetch("http://localhost:3000/api/todo/todos");
    const json = await response.json();
    setTodos(json.todos);
  }

  useEffect(() => {
    render();
  }, []);

  //   return (
  //     <div style={{display:"flex",flexWrap:"wrap", justifyContent:"center"}}>
  //       <TodoWrapper>
  //         <CreateTodo call={render}></CreateTodo>
  //         <button style={{backgroundColor:"brown", color:"white"}} onClick={ () => {
  //           window.location.reload();
  //         }}>refresh</button>
  //         </TodoWrapper>

  //         <ListTodoWrapper>
  //           <h1>Lists:</h1>
  //           <Todo todos={todos} call={render}></Todo>
  //         </ListTodoWrapper>

  //     </div>
  //   );
  // }

  // const TodoWrapper=({children})=>{
  //   return <div style={{border: "2px solid black", width:"30%",padding:"1%",height:"15vh", display:"inline-block", backgroundColor:"grey",alignSelf:"center", order:"1"}}>
  //     {children}
  //   </div>
  // }
  // const ListTodoWrapper=({children})=>{
  //   return <div style={{border: "2px solid black", width:"30%", height:"85vh",padding:"1%",overflow:"auto", backgroundColor:"grey", display:"inline-block", order:"2", marginLeft:"2%"}}>
  //     {children}
  //   </div>
  // }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
          borderRadius:"10%",
          width: "40%",
          padding: "20px",
          backgroundColor: "#fff",
          marginBottom: "20px",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <CreateTodo call={render}></CreateTodo>
        </div>

        <div style={{ borderTop: "1px solid #ddd", paddingTop: "20px" }}>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              marginBottom: "10px",
            }}
          >
            Lists:
          </div>
          <div style={{ overflow: "auto", height: "400px" }}>
            <Todo todos={todos} call={render}></Todo>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoMain;
