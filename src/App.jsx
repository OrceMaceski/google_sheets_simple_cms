import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchSheet = async () => {
    fetch(`${import.meta.env.VITE_API_URL}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    fetchSheet();
  }, []);

  return (
    <div className="App">
      <h1>Data from Google Sheets</h1>
      <div className="cards-container">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.Title}
            description={item.Description}
            author={item.Author}
            cover={item.Cover}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
