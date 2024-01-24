import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import TodoMain from "./components/TodoMain";
import MarketList from "./components/MarketList";
function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/Todo-app" element={<TodoMain />} />
        <Route path="/Shopping-list" element={<MarketList />} />
      </Routes>
    </BrowserRouter>
  );
}

function AppBar() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{
          height:"50px",
          marginBottom:"10px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          alignItems:"center"
        }}
      >
        <button
          style={{
            backgroundColor: "#1877f2",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            transition: "background-color 0.3s ease",
            width:"200px",
            height:"50px"
          }}
          onClick={() => {
            navigate("/Todo-app");
          }}
        >
          Create Todo
        </button>

        <button
          style={{
            backgroundColor: "#1877f2",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            transition: "background-color 0.3s ease",
            width:"200px",
            height:"50px"
          }}
          onClick={() => {
            navigate("/Shopping-list");
          }}
        >
          Create Shoping List
        </button>
      </div>
    </div>
  );
}

export default App;
