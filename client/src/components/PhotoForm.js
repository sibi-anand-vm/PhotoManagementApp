import React, { useState } from "react";
import "../styles/PhotoForm.css";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { Link } from "react-router-dom";
const PhotoForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [photo, setPhoto] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhoto(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!photo) {
      alert("Please select a photo to upload.");
      return;
    }
  
    setUploading(true);
  
    const storageRef = firebase.storage().ref();
    const photoRef = storageRef.child(`photos/${photo.name}`);
  
    try {
      // Upload the file to Firebase Storage
      await photoRef.put(photo);
      const ImageURL = await photoRef.getDownloadURL();
  
      // Send the data to your backend
      const response = await fetch('http://localhost:4008/api/addimage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, desc, genre, ImageURL }),
      });
  
      if (response.ok) {
        const message = await response.text();
        if (message === 'Image Added Successfully') {
          alert('Image Added Successfully');
        }
      } else if (response.status === 409) {
        alert('Title Already Exists');
      } else {
        const errorMessage = await response.text();
        console.error('Error:', errorMessage);
        alert('Some problem occurred. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error occurred while processing your request. Please try again later.');
    } finally {
      setUploading(false);
    }
  };
  

  return (
    <>
    <form onSubmit={handleSubmit} className="photo-form">
    <h2 className="uphead">Upload a New Photo</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handlePhotoChange}
        required
      />
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <button type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Upload Photo"}
      </button>
      <Link to="/gallery">
        <button id="galbtn" className="gallery-button">Go to Gallery</button>
      </Link>
    </form></>
  );
};

export default PhotoForm;
