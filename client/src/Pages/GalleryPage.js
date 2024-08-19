import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CardComponent from "../components/card";
import '../styles/GalleryPage.css';

const GalleryPage = () => {
  const [imagesArray, setImagesArray] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4008/api/allimages', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const imagesData = await response.json();
          setImagesArray(imagesData);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = (id) => {
    setImagesArray(imagesArray.filter(image => image.ImageID !== id));
  };

  const filteredImages = imagesArray.filter((image) =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gallery">
      <Navbar />
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search images by title..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="cards-container">
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {filteredImages.length > 0 ? (
            filteredImages.map((image) => (
              <CardComponent key={image.ImageID} image={image} onDelete={handleDelete} />
            ))
          ) : (
            <h2>No images to display!</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
