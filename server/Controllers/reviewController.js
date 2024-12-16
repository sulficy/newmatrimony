const Review = require('../Models/reviewSchema');

exports.reviewPort = async (req, res) => {
    console.log('inside add doc');
    const { rating, message} = req.body
    console.log(rating,message);
    const userId = req.payload
    try {
        const newReview = new Review({rating, message, userId });
        await newReview.save();
        res.status(200).json(newReview);

    } catch (err) {
      res.status(402).json({ message: 'Error adding doctor', error: err.message });
    }
  };

  exports.getReview = async(req,res)=>{
    try{
      const response = await Review.find()
      res.status(200).json(response)
    }
    catch(err){
      res.status(402).json("Error"+err)
    }
  }