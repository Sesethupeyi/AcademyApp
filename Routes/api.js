const express = require('express');
const router = express.Router();
const Group = require('../Models/quest');

router.get('/', function(req, res, next){
var questions = [];
   Group.find({}).then(function(group){
      res.send(group);
      questions.push(group);
    console.log(questions);  
   })
});
 
router.post('/', function(req, res, next){
  
   Group.create(req.body).then( function(group){
      res.send(group);

   }).catch(next);
 });

 router.put('/:id', function(req, res, next){
   Group.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
    Group.findOne({_id: req.params.id}).then(function(group){
      res.send(group);
     });
   });
 });

 router.delete('/:id', function(req, res, next){
  Group.findByIdAndRemove({_id: req.params.id}).then(function(group){
       res.send(group);
     });
 });

module.exports = router;