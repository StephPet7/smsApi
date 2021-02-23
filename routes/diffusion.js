var express = require('express');
var router = express.Router();

const {Diffusion} = require('../models');
const diffusion = require('../models/diffusion');

router.get('/', (req, res, next) => {
  	Diffusion.findOne()
	  .then((diffusion) => {
		  console.log(diffusion)
		  res.send("SUCCESS pour diffusion")
          res.json({
              diffusion:diffusion
          })
		})
	  .catch((err) => console.log(err))
      console.log('Diffusion')
});

//Get a diffusion by the id
router.get('/:id',(req,res, next)=>{
    Diffusion.findAll({
        where: {
            id: req.params.id
        }
    }).then((diffusion) =>{
        console.log(diffusion)
        res.json(diffusion)
    }).catch(() =>{
        if(err)
        {
            console.log(err)
            res.json({'status' : 'Failure'})
        }
    })
});

router.get('/id',(req,res, next)=>{
    Diffusion.findById(req.params.id).then((diffusion)=>{
        console.log(diffusion)
        res.send("Succès de la diffusion")
        res.json({
            diffusion:diffusion
        })
    })
    .catch((err)=> console.log(err))
    console.log("Succès diffusion "+req.params.id)
});

router.put('/id',(req,res,next)=>{
    Diffusion.update(res.body,{where: {id: req.params.id}})
    .then(()=>res.json({'status':'Diffusion actulisé'}))
    .catch((err)=>res.json({'status':'erros'}))
});

router.post('/',(req,res,next)=>{
    Diffusion.create({
        user:req.body.user,
        dateDiffusion:req.body.date
    })
    .then(()=>{
        res.json({'status':'Diffusion créee'})
    })
    .catch(()=>{
        if(err){
            console.log(err)
            res.json({'status':'Failure'})
        }
    })
});

router.delete('/id',(req,res,next)=>{
    Diffusion.destroy({
        where:{id:req.params.id}
    })
    .then(()=>res.json({'status':'Diffusion supprimé'}))
    .catch((err)=>res.json({"statu":'error'}))

});

module.exports = router;

