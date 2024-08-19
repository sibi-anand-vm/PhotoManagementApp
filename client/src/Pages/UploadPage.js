import React from "react";
import PhotoForm from "../components/PhotoForm";
import "../styles/UploadPage.css";
import Navbar from "../components/navbar";
const UploadPage = ({ onUpload }) => {
  return (
    <>
     <div id="uploadpage">
    <Navbar />
      <PhotoForm onUpload={onUpload} />
    </div></>
  );
};

export default UploadPage;
