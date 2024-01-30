import { useState, memo } from "react";

const CreateList = memo(function () {
  //react-query
  const [itemName, setTitle] = useState("");
  const [amount, setAmount] = useState("");


  return (
    <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>

      <div style={{fontWeight:"bold", margin:"0 0 20px 0"}}>
        Shopping List
      </div>

      Name:{" "}
      <input
        type="text"
        value={itemName}
        placeholder="Name"
        onChange={(e) => setTitle(e.target.value)}
        style={{ backgroundColor: "white", width: "25%" }}
      />
      <br />
      Weight/Piece:{" "}
      <input
        type="text"
        value={amount}
        placeholder="Type Weight?Piece here"
        onChange={(e) => setAmount(e.target.value)}
        style={{ backgroundColor: "white", width: "25%" }}
      />
      <br />
      <button
        style={{ 
            backgroundColor: "green",
            color: "#fff",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            outline: "none",
            transition: "background-color 0.3s ease",
            }}
        onClick={async () => {
          const response = await fetch("http://localhost:3000/api/list", {
            method: "POST",
            body: JSON.stringify({
              itemName: itemName,
              amount: amount,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (!response.ok) {
            throw new Error("Failed to add todo");
          }

          setTitle("");
          setAmount("");
        }}
      >
        add
      </button>
    </div>
  );
});

export default CreateList;
