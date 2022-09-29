
//Importing modules
const Tour = require('../models/tourModel');

 

//Middle-ware


//functions

exports.getTours = (req,res) => {
    res.status(200).json({
        status : 'Success',
        // results : tours.length,
        // data : {
        //     tours
        // }
    })
};

exports.postTours = (req,res) => {

    console.log(req.body)
    res.status(200).send('Post Request Recieved');
}



exports.getSingleTour = (req,res) => {
// const tour = tours.find(el => req.params.id * 1 === el.id)
    res.status(200).json({
        status : 'success',
        // data : {
        //     tour
        // }
    })
}

exports.deleteSingleTour = (req,res) => {
  

    res.status(200).send({
        status : 'succeess',
        data : {
            data : null,
        }
    })
}
