import React from "react";

function Card({ title, description, author, cover }) {
  return (
    <div className="card">
      <div>
        <img src={cover} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>- {author} -</p>
    </div>
  );
}

export default Card;
