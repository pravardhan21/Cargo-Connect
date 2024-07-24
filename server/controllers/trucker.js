
const Trucker=require('../models/trucker')

const createtrucker=async(req,res)=>{
    const pro=new Trucker(req.body)
    try {
        const save=await pro.save()
        res.status(200).json(save)
    } catch (error) {
        res.json(error);
    }
}
const updatetrucker=async(req,res)=>{
    console.log(req.body);
      const {name,current,destination}=req.body
      try {
        const trucker = await Trucker.findOne({ name });
        if (!trucker) {
            // If trucker not found, return error
            return res.status(404).json({ message: "Trucker not found" });
          }
      
          // Update the current and destination attributes
          trucker.current = current;
          trucker.destination = destination;
          const updatedTrucker = await trucker.save();
          res.status(200).json(updatedTrucker);
      } catch (error) {
        console.error(error);
    res.status(500).json({ message: "Internal server error" });
      }
}

const inter=async(req,res)=>{
  const {name}=req.query
  try {
    const trucker = await Trucker.findOne({ name });
    if (!trucker) {
        // If trucker not found, return error
        return res.status(404).json({ message: "Trucker not found" });
      }
      res.status(200).json(trucker.interested)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

const login = async (req, res) => {
  const { mail } = req.query;
  try {
      // Search for the trucker by their email in the Trucker model
      const trucker = await Trucker.findOne({ email: mail });
      if (trucker) {
          // If a trucker with the given email is found, return their name
          return res.status(200).json({ name: trucker.name });
      } else {
          // If trucker not found, return a message
          return res.status(404).json({ message: "Trucker not found" });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }
}
module.exports={createtrucker,updatetrucker,inter,login}