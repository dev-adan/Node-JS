
//Importing
const express = require('express');
const fs = require('fs');



//initialization
const router = express.Router();


//Reading Files
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))


//functions

const getTours = (req,res) => {
    res.status(200).json({
        status : 'Success',
        results : tours.length,
        data : {
            tours
        }
    })
};

const postTours = (req,res) => {

    console.log(req.body)
    res.status(200).send('Post Request Recieved');
}



const getSingleTour = (req,res) => {
    const id = req.params.id * 1;
    const tour = tours.find(el => el.id === id);

    if(id > tours.length){
       return res.status(404).send('Requested document not found in the server...')
    }

    res.status(200).json({
        status : 'success',
        data : {
            tour
        }
    })
}

const deleteSingleTour = (req,res) => {
    const id = req.params.id * 1;
    if(id > tours.length){
        return res.status(400).send('No document found to delete');
    }

    res.status(200).send({
        status : 'succeess',
        data : {
            data : null,
        }
    })
}



//Routes

router
.route("/")
.get(getTours)
.post(postTours);


router
.route("/:id")
.get(getSingleTour)
.delete(deleteSingleTour);

//exporting
module.exports = router;