const express = require('express')
const User = require('../models/User')
const router = express.Router();
const Course = require('../models/Courses')


//api creation
router.get('/greeting', (req, res)=>{
    res.json({message : "Hello from the API"});
});


//basic api setup
router.get('/selfintro',(req,res)=>{
    res.json({name: "Abinesh S",profession: "Detective", age : 20, })
})


//adding new users
router.post('/adduser', async (req,res)=>{
    const {name, email ,age} = req.body;

    try{
        const newUser = new User({name,email,age});
        await newUser.save();
        res.status(201).json({message: "User Created Successfully",user: newUser});
    }catch(error){
        res.status(400).json({message: error.message});
    }
});


//adding new courses
router.post('/addcourse', async (req,res)=>{
    const {Title, Description, Duration,  Category, Price} = req.body;

    try{
        const newCourse = new Course({Title, Description, Duration, Category, Price});
        await newCourse.save();
        res.status(201).json({message : "Course Created Successfully", course : newCourse, name: newCourse.Title});
    }catch(error){
        res.status(400).json({message : error.message});
    }
})


//accessing all the courses
router.get('/getcourse', async (req,res)=>{
    try{
        const course = await Course.find();

        res.status(200).json(course);
    }catch(error){
        res.status(500).json({message : error.message})
    }
})


//searching course by id
router.get('/getcourse/searchbyid/:id', async (req, res)=>{
    try{
        const course = await Course.findById(req.params.id);
        if(!course) return res.status(404).json({message : "Could Not Find Course"});
        res.json(course);
    }catch(error){
        res.status(500).json({message : error.message})
    }
});


//searching course by name
router.get('/getcourse/searchbyname', async (req,res)=>{
    const {name} = req.query
    try{
        const courses = await Course.find({Title: {$regex: name , $options: 'i'}});
        if (!courses) return res.status(404).json({message : "There is no Courses Available"})
        res.json(courses);
    }catch(error){
        res.status(500).json({message : error.message})
    }
})

module.exports = router;