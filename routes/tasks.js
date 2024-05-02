var express = require('express');
var router = express.Router();

let tasks = [{
    'id':'1',
    'name':'caminar al perro',
    'description':'Llevar al perro al parque',
    'dueDate':'2024-04-20'
}];

/* GET users listing. */
router.get('/getTasks', function(req, res, next) {
    res.status(200).json(tasks)
});

router.delete('/removeTask/:id', function(req, res, next) {
    console.log(req.params.id);
    if(req.params && req.params.id){
        let id = req.params.id;
        tasks = tasks.filter(task => task.id !== id); 
        res.status(200).json(tasks)
    }else {
        res.status(400).json({})
    }
});


router.post('/addTask', function(req, res, next) {
    let timestamp = Date.now() + Math.random();
    if(req.body && req.body && req.body.name && req.body.description && req.body.description){
        req.body.id = timestamp;
        tasks.push(req.body);
        res.status(200).json(tasks);
    }else{
        res.status(400).json(tasks);
    }

   // res.send('respond with a resource');
});

module.exports = router;
