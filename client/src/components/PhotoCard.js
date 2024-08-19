import React from "react";
import { Link } from "react-router-dom";
import "../styles/PhotoCard.css";

const PhotoCard = ({ images }) => {
  return (
    <>
      {images.map((photo) => (
        <div className="photo-card">
        <div className="photo-item">
          <img src={photo.ImageURL} alt={photo.title} />
          <h2>{photo.title}</h2>
          <h3>{photo.genre}</h3>
          <p>{photo.desc}</p>
          <Link to={`/photo/${photo.ImageID}`}>View Details</Link>
        </div>
        </div>
      ))}
          </>
  );
};

export default PhotoCard;

