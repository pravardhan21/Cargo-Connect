const Provider=require('../models/provider')
const Trucker=require('../models/trucker')
const createprovider=async(req,res)=>{
    const pro=new Provider(req.body)
    try {
        const save=await pro.save()
        res.status(200).json(save)
    } catch (error) {
       res.json(error)
    }
}

const updateprovider=async(req,res)=>{
    console.log(req.body);
      const {name,current,destination,cargo}=req.body
      try {
        const trucker = await Provider.findOne({ name });
        if (!trucker) {
            // If trucker not found, return error
            return res.status(404).json({ message: "Trucker not found" });
          }
      
          // Update the current and destination attributes
          trucker.current = current;
          trucker.destination = destination;
          trucker.cargosize=cargo;
           await trucker.save();
          const matchingTruckers = await Trucker.find({ current, destination });
        
        if (matchingTruckers.length === 0) {
            // If no matching trucker is found, return a message
            return res.status(404).json({ message: "No matching truckers found" });
        }
        
        // If matching truckers are found, return them
        res.status(200).json(matchingTruckers);
      } catch (error) {
        console.error(error);
    res.status(500).json({ message: "Internal server error" });
      }
}

const inter=async(req,res)=>{
    const {tname,name,email,phone}=req.body;
console.log(email);
console.log(phone);
console.log(name);
    try {
        
        const trucker = await Trucker.findById(tname);
        if (!trucker) {
            // If trucker not found, return error
            return res.status(404).json({ message: "Trucker not found" });
          }
      
          // Update the current and destination attributes
          trucker.interested.push({ name, email, phone });

          const updatedTrucker = await trucker.save();
          res.status(200).json(updatedTrucker);
    } catch (error) {
        console.log(error);
    }
}


const login = async (req, res) => {
  const { mail } = req.query;
  try {
      // Search for the provider by their email in the Provider model
      const provider = await Provider.findOne({email:mail });
      if (provider) {
          // If a provider with the given email is found, return their name
          return res.status(200).json({ name: provider });
      } else {
          // If provider not found, return a message
          return res.status(404).json({ message: "Provider not found" });
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
  }

}
module.exports={createprovider,updateprovider,inter,login}