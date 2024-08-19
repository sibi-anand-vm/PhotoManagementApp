import React from "react";
import '../styles/card.css';
import { useNavigate } from "react-router-dom";

const CardComponent = ({ image, onDelete }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4008/api/delete/${image.ImageID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                alert('Image deleted successfully');
                if (onDelete) {
                    onDelete(image.ImageID); // Notify parent component of the deletion
                }
            } else {
                console.error('Failed to delete image:', response.statusText);
            }
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };

    return (
        <div className="card-container">
            <img src={image.ImageURL} alt={image.title} className="card-image" />
            <div className="card-content">
                <h5 className="card-title">{image.title}</h5>
                <h6 className="card-subtitle">{image.genre}</h6>
                <p className="card-text"></p>
                <div className="button-container">
                    <button className="card-btn" onClick={() => navigate(`/photo/${image.ImageID}`)}>View details</button>
                    <button className="card-delete-btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
