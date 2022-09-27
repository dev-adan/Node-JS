
//Importing modules
const fs = require('fs');

//Reading Files
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))


//Middle-ware
exports.checkID = (req,res,next,val) => {
    console.log('The tour id is' + " " + val);
    const id = req.params.id * 1;
    if(id > tours.length){
        return res.status(400).send('Invalid ID');
    }
    next();
};


exports.checkBody = (req,res,next) => {
    if(!req.body.name || !req.body.price){
        return res.status(400).json({
            status : 'fail',
            message : 'Missing name or price or both'
        })
    };
    next();
}


//functions

exports.getTours = (req,res) => {
    res.status(200).json({
        status : 'Success',
        results : tours.length,
        data : {
            tours
        }
    })
};

exports.postTours = (req,res) => {

    console.log(req.body)
    res.status(200).send('Post Request Recieved');
}



exports.getSingleTour = (req,res) => {
const tour = tours.find(el => req.params.id * 1 === el.id)
    res.status(200).json({
        status : 'success',
        data : {
            tour
        }
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
