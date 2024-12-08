const doctors = require('../Models/doctorSchema');

exports.addDocters = async (req, res) => {
    console.log('inside add doc');
    
    const { name, email, speciality, phone } = req.body
    const doctorImg = req.file.filename
    const userId = req.payload
    
    // const createdBy = req.user.id;
    try {
      const doctor = await doctors.findOne({email})
      if(doctor)
        
        // res.status(404).json("doctor already existing...")
        alert("doctor already exist...")
      else{
        const newDoctor = new doctors({ name, email, speciality, phone, doctorImg, userId });
        await newDoctor.save();
        res.status(200).json(newDoctor);
      }
    } catch (err) {
      res.status(402).json({ message: 'Error adding doctor', error: err.message });
    }
  };


  //Get all doctor details

  exports.getAllDoctorDetails = async(req,res)=>{
    try{
      const response = await doctors.find()
      res.status(200).json(response)
    }
    catch(err){
      res.status(402).json("Error"+err)
    }
  }


  


