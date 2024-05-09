var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

let tasks = [{
    'id':'1',
    'name':'caminar al perro',
    'description':'Llevar al perro al parque',
    'dueDate':'2024-04-20'
}];

const taskInit = mongoose.model('tasks', { name: String, description: String, dueDate: String },'tasks');

/* GET users listing. */
router.get('/getTasks', function(req, res, next) {
    taskInit.find().then(
        (response)=> res.status(200).json(response))
        .catch(err=>{
        console.log(err);
        res.status(500).json({});
    });
});

router.delete('/removeTask/:id', function(req, res, next) {
    console.log(req.params.id);
    if(req.params && req.params.id){
        let id = req.params.id;
        taskInit.deleteOne({_id:new mongoose.Types.ObjectId(id)}).then((response)=>{
            res.status(200).json(response);
        }).catch((err)=>{
            res.status(500).json(err);
        })
    }else {
        res.status(400).json({})
    }
});


router.post('/addTask', function(req, res, next) {
    let timestamp = Date.now() + Math.random();
    if(req.body && req.body && req.body.name && req.body.description && req.body.description){
        const task = new taskInit(req.body);
        task.save().then(
            () => res.status(200).json(tasks)
        ).catch(
            (err)=>res.status(400).json(tasks)
        );

        
    }else{
        res.status(400).json(tasks);
    }

   // res.send('respond with a resource');
});

module.exports = router;
