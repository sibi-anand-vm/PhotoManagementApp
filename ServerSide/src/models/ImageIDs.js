import mongoose from "mongoose";

const ImageIDSchema = mongoose.Schema({
    ImageID: {
        type: Number,
        required: true,
        unique: true
    }
});

const ID = mongoose.model("ImageIDCollections", ImageIDSchema);

export default ID;