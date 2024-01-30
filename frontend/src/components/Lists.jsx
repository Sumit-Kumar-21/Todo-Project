function Lists({ marketLists }) {

    return (
      <div
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {marketLists.map((list) => (
          <div
            key={list._id}
            style={{
              margin: "20px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              backgroundColor: "#fff",
            }}
          >
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                  marginBottom: "10px",
                }}
              >
                {list.itemName}
              </div>
              <div style={{ fontSize: "1rem", color: "#555" }}>
                {list.amount}
              </div>
            </div>
  
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button
                onClick={async () => {
                  const response = await fetch(
                    "http://localhost:3000/api/list/completed",
                    {
                      method: "PUT",
                      body: JSON.stringify({
                        _id: list._id,
                      }),
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  );
                  if (!response.ok) {
                    alert("Something went wrong");
                  }
                }}
                style={{
                  padding: "10px",
                  backgroundColor: list.completed ? "#4CAF50" : "#2196F3",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  marginBottom: "5px",
                }}
              >
                {list.completed ? "Done" : "Buyed ?"}
              </button>
  
              <button
                onClick={async () => {
                  const response = await fetch("http://localhost:3000/api/list/delete", {
                    method: "DELETE",
                    body: JSON.stringify({
                      _id: list._id,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  });
                  if (!response.ok) {
                    alert("Something went wrong");
                  }
                }}
                style={{
                  padding: "10px",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Lists;
  