import Images from "../models/Imagesmodel.js";   
const getimages=async(req,res)=>{
    const result = await Images.find({}).sort({ ImageID: 1 });
res.send(result)  
 }   
export {getimages}  
const getImageById = async (req, res) => {  
  try {    
    const { id } = req.params;  // Extract 'id' from URL parameters
    const image = await Images.findOne({ ImageID: parseInt(id) });  // Fetch the image by ImageID 
    if (!image) {
      return res.status(404).json({ message: 'Image not found' }); 
    }      
    res.json(image);      
  } catch (error) {        
    console.error('Error fetching image:', error);       
    res.status(500).json({ message: 'Internal server error' });          
  }
};
export { getImageById };
   