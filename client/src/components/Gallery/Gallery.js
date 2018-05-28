import React from 'react';
import './Gallery.css';

const Gallery = props => (
  <div className="card" onClick={props.onClick.bind(this, props.id)}>
    <div className="img-container">
      <img src={props.image} alt="portfolio pic"/>
    </div>
  </div>
);

export default Gallery;
