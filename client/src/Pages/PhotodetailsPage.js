import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/PhotodetailsPage.css";

const PhotoDetailsPage = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4008/api/photos/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const photoData = await response.json();
          setPhoto(photoData);
        } else {
          setError('Failed to fetch data.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const container = document.querySelector('.photo-details-container');
    if (container) {
      container.classList.add('show');
    }
  }, [photo]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!photo) {
    return <p>No photo found.</p>;
  }

  return (
    <div className="detailpage">
      <h1>Image Details Page</h1>
      <div className="photo-details-container">
        <img src={photo.ImageURL} alt={photo.title} className="photo-image" />
        <h1>{photo.title}</h1>
        <p>{photo.desc}</p>
        <p><strong>Genre:</strong> {photo.genre}</p>
        <p><strong>Image ID:</strong> {photo.ImageID}</p>
        <p><strong>Uploaded at:</strong> {new Date(photo.createdAt).toLocaleDateString()}</p>
      </div>
      <Link to="/gallery" className="go-back-btn">Go Back</Link>
    </div>
  );
};

export default PhotoDetailsPage;
