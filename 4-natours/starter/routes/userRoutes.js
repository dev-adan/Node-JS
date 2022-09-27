//Imports
const express = require('express');
const fs = require('fs');


//Initialization
const router = express.Router();

//reading file
const users = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/users.json`))



//Functions

const getAllUsers = (req,res) => {
    res.status(200).json({
        status : 'Success',
        results : users.length,
        data : {
            users
        }
    })
};


const createUsers = (req,res) => {
    res.status(200).json({
        status : 'Success',
        results : users.length,
        data : {
            users
        }
    })
};


const getUser = (req,res) => {
    const id = req.params.id * 1;
    const user = users.find(el => el.id === id);

    if(id > users.length){
       return res.status(404).send('Requested document not found in the server...')
    }

    res.status(200).json({
        status : 'success',
        data : {
            user
        }
    })
}




const deleteUser = (req,res) => {
    const id = req.params.id * 1;
    if(id > users.length){
        return res.status(400).send('No document found to delete');
    }

    res.status(200).send({
        status : 'succeess',
        data : {
            data : null,
        }
    })
}


const updateUser = (req,res) => {

    console.log(req.body)
    res.status(200).send('Update request recieved');
}


//Routing
router
.route('/')
.get(getAllUsers)
.post(createUsers)


router
.route('/:id')
.get(getUser)
.patch(updateUser)
.delete(deleteUser);


//exporting
module.exports = router;