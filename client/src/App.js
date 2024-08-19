import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadPage from './Pages/UploadPage'
import GalleryPage from "./Pages/GalleryPage";
import PhotoDetailsPage from "./Pages/PhotodetailsPage";
import Homepage from "./Pages/Homepage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />   
        <Route path="/upload" element={<UploadPage/>} />
        <Route path="/gallery" element={<GalleryPage/>} />
        <Route path="/photo/:id" element={<PhotoDetailsPage/>} />
      </Routes>
    </Router>
  );
  };
  
export default App;
