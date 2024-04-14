import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchSheet = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}`);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSheet();
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>Data from Google Sheets</h1>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <h1>Data from Google Sheets</h1>
        <div>Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>Data from Google Sheets</h1>
      <div className="cards-container">
        {data.map((item) => (
          <Card
            key={item.id} // assuming id is a unique identifier in your data
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
