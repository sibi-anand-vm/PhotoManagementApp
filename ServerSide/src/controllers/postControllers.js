import Images from "../models/Imagesmodel.js";
import ID from "../models/ImageIDs.js"
const createimage = async (req, res) => {
    const { title,desc,genre,ImageURL } = req.body; // Use Profilepic here
    try {
        const existingtitle = await Images.findOne({ title });
        if (existingtitle) {
            return res.status(409).send('Title Already Exists');
        }
        let ImageID;
        let isUnique = false;
        while (!isUnique) {
            ImageID = Math.floor(Math.random() * (10000 - 7777 + 1)) + 7777;
            const existID = await ID.findOne({ ImageID });
            if (!existID) {
                isUnique = true;
            }
        }
        await ID.create({ ImageID });
        const newImage = await Images.create({ title,desc,genre,ImageID,ImageURL }); 

        // Respond with success
        res.status(201).send('Image Added Successfully');
    } catch (error) {
        console.error('Error adding Image:', error);
        res.status(500).send('Error adding Image. Please try again later.');
    }
};

export { createimage };
