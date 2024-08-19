import Images from "../models/Imagesmodel.js";
const delimage = async (req, res) => {
    const { id } = req.params; 
    let ImageID=id;
    try {
        const image = await Images.findOneAndDelete({ ImageID });
        if (!image) {
            return res.status(404).send('Image not found');
        }

        res.send('Image deleted Successfully');
    } catch (error) {
        res.status(500).send('Internal server error');
    }
};
export {delimage};