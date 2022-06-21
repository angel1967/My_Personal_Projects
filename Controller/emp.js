// Controller
const Emp = require('../models/emp')
const mongoose = require('mongoose')
function create(req,res,next,resupdate=true){
  let empName = req.body.empName;
  let empEmail = req.body.empEmail;
  let empMobile = req.body.empMobile;
  let emp = new Emp({
    empName,
    empEmail,
    empMobile
  })
 
  emp.save().then((data)=>{

    if (resupdate){
    res.send(data)}
  }).catch(err => {
    // Some code if promise action failed
    console.log(err)
})
}
function view(req,res,next){
    Emp.find({}).then((data)=>{
      res.send(data)
    })
  }

function update(req,res,next){
    Emp.findByIdAndUpdate(req.params.id,req.body, (err,emp)=>{
      if (err) {
    
        create(req,res,next,false)
        res.status(201).send({success: "new record created"})
      }else{
      res.status(200).send({success: "Updating successfully"});}
    })
  }
function remove(req,res,next){
    Emp.findByIdAndDelete(req.params.id, (err,emp)=>{
      if(err){
        return res.status(500).send({error: "Problem with Deleting the Employee record "})
      }
      res.send({success: 'Employee deleted successfully'})
    })
  }


module.exports.create = create
module.exports.view = view
module.exports.update = update
module.exports.remove = remove