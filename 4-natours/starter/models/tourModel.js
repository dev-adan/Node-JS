
const mongoose = require('mongoose');
const tourSchema = new mongoose.Schema({
    name : {
      type : String,
      required : [true,'A tour must have a name.'],
      unique : true,
    },
    duration : {
      type :Number,
      required : [true,'A tour must have a duration.']
    },
    maxGroupSize : {
      type : Number,
      required : [true,'A tour must have a group size.']
    },
    difficulty : {
      type : String,
      require : [true,'A tour should have difficulty.']
    },
    ratingsAverage : {
      type : Number,
      default  :4.5,
    },
    ratingsQuantity : {
      type : Number,
      default : 0,
    },
    rating : {
      type : Number,
      default : 4.5,
    },
    price : {
      type : Number,
      required : [true,'A tour must have a price.'],
      
    },
    priceDiscount : {
      type : Number,
    },
    summary : {
      type : String,
      trim : true, 
      required : [true,'A tour must have a Summary']
    },
    description : {
      type : String,
      trim : true,
    },
    imageCover : {
      type  :String,
      required : [true,'A tour must have a cover image']
    },
    images : {
      type : [String],
      createdAt : {
        type : Date,
        default : Date.now()
      },
      startDates  :[Date]

    }
  
  });
  
  const Tour = mongoose.model('Tour', tourSchema);

  module.exports = Tour;