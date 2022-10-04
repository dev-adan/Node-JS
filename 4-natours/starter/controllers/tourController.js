
//Importing modules
const Tour = require('../models/tourModel');

 
//Middle-ware



//functions
exports.createTour = async (req,res) => {


    try{
        newTour = await Tour.create(req.body);

        res.status(201).json({
            status : 'success',
            data : {
                tour : newTour
            }
        })


    }catch(error){
        res.status(400).json({
            status : 'fail',
            message : error,
        })

    }


} 

exports.getTours = async (req,res) => {

    try{

        const queryObj =  {...req.query};
        const excludedFields = ['page','sort','limit','fields'];

        excludedFields.forEach(el => delete queryObj[el])

        const tours = await Tour.find(req.query);

        res.status(200).json({
            status : 'Success',
            results : tours.length,
            data : {
                tours
            }
        })

    }catch(error){
        res.status(404).send('Some Error occured!')
    }

   
};


exports.getTour = async (req,res) => {


    try{

        const tour  = await Tour.findById(req.params.id)

        res.status(200).json({
            status : 'success',
            data : {
                tour
            }
        })

    }catch(error){
        res.send('Not able to get the document.')

    }
   
}

exports.deleteTour = async (req,res) => {

  
    try{

         await Tour.findByIdAndDelete(req.params.id)

        res.status(204).send({
            status : 'succeess',
            data : null,
        })

    }catch(error) {
        res.status(404).send('Failed to delete a tour.')
    }

    
}

exports.updateTour = async (req,res ) => {

    try{

        const tour = await Tour.findByIdAndUpdate(req.params.id,req.body,{
            new : true,
            runValidators : true,
        });

        res.status(200).json({
            status  :'success',
            data : {
                tour 
            }
        })

    }catch(error){
        res.send('Unable to update the document.')
        
    }

}
