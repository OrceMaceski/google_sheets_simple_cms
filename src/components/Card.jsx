import React from "react";

function Card({ title, description, author }) {
  return (
    <div className="card">
      <h1>Book:</h1>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Author: {author}</p>
    </div>
  );
}

export default Card;
