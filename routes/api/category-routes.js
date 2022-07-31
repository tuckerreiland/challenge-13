const router = require('express').Router();
const { afterSync } = require('../../config/connection');
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  await Category.findAll({
    include:[Product]
  }).then(data=>{
    res.json(data)
  }).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
  })
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  await Category.findOne({
    where:{
      id:req.params.id
    },
    include:[Product]
  }).then(data=>{
    res.json(data)
  }).catch(err=>{
    res.status(500).json({msg:"error",err})
  })
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const newCategroy = await Category.create({
        categroy_name:req.body.category_name,
    })
    res.status(201).json(newCategroy)
  }catch(err){
    console.log(err)
    res.status(500).json({
        msg:"error",
        err
    })
}
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where:{
        id:req.params.id
    }
    }).then(catgeory=>{
        if(!category){
            return res.status(404).json({msg:"no such category!"})
        }
    res.json(category)
}).catch(err=>{
    res.status(500).json({
        msg:"internal server error",
        err
    })
})
});

module.exports = router;
