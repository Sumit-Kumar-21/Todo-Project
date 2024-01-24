import { useEffect, useState } from "react";
import CreateList from "./CreateList";
import Lists from "./Lists";

function MarketList() {
  const [marketLists, setMList] = useState([]);

  async function render() {
    const response = await fetch("http://localhost:3000/api/list/lists");
    const json = await response.json();
    setMList(json.lists);
  }

  useEffect(() => {
    render();
  }, []);

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
          <CreateList call={render}></CreateList>
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
            <Lists marketLists={marketLists} call={render}></Lists>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketList;
