import React from 'react';

export default function Person({image, name, title}) {
  return (
    <div className="person-container col-md-3">
      <div className="person-image">
        <img className="image-center" src={image} alt={name} />
      </div>
      <div className="person-name text-center">{name}</div>
      <div className="person-title text-center">{title}</div>
    </div>
  );
}
