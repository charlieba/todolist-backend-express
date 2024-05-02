var express = require('express');
var router = express.Router();

let goals = [];

/* GET users listing. */
router.get('/getGoals', function(req, res, next) {
    res.json(goals)
});

router.delete('/removeGoal/:id', function(req, res, next) {
    if(req.params && req.params.id){
        let id = req.params.id;
        tasks = tasks.filter(task => task.id == id); 
        res.json(goals)
    }else {
        es.json({})
    }
});


router.post('/addGoal', function(req, res, next) {
    let timestamp = Date.now() + Math.random();
    if(req.body && req.body && req.body.name && req.body.description && req.body.description){
        req.body.id = timestamp;
        tasks.push(req.body);
    }
    res.json(goals);
   // res.send('respond with a resource');
});

module.exports = router;
