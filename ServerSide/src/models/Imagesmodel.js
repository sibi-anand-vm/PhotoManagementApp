import mongoose from "mongoose";
const ImagesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    desc: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    ImageID: {
        type: Number,
        required: true
    },
    ImageURL: { // Make sure this matches the name used in frontend and backend
        type: String,
        default: "False"
    },
},  
{
    timestamps: true
});

const Images = mongoose.model("ImageCollections", ImagesSchema);
export default Images;
