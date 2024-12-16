const appointment = require('../Models/AppointmentSchema');

exports.addAppointment = async (req, res) => {
    console.log('inside add appointment');
    
    const { name, date, time, reason } = req.body
    // const doctorImg = req.file.filename
    const userId = req.payload
    
    // const createdBy = req.user.id;
    try {
      const appoint = await appointment.findOne({name,date,time,reason})
      if(appoint)
        
        // res.status(404).json("doctor already existing...")
        alert("already appointment done...")
      else{
        const newAppoint = new appointment({ name, date, time, reason, userId });
        await newAppoint.save();
        res.status(200).json(newAppoint);
      }
    } catch (err) {
      res.status(402).json({ message: 'Error adding doctor', error: err.message });
    }
  };


  //Get all doctor details

  exports.getAppointment = async(req,res)=>{
    try{
      const response = await appointment.find()
      res.status(200).json(response)
    }
    catch(err){
      res.status(402).json("Error"+err)
    }
  }