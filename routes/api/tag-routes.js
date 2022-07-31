const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  await Tag.findAll({
    include:[Product]
  }).then(data=>{
    res.json(data)
  }).catch(err=>{
    res.status(500).json({msg:"oh noes! error!",err})
  })
});


router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  await Tag.findOne({
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
  // create a new tag
  try{
    const newTag = await Tag.create({
        tag_name:req.body.tag_name,
    })
    res.status(201).json(newTag)
  }catch(err){
    console.log(err)
    res.status(500).json({
        msg:"error",
        err
    })
}
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where:{
        id:req.params.id
    }
    }).then(tag=>{
        if(!tag){
            return res.status(404).json({msg:"no such tag!"})
        }
    res.json(tag)
}).catch(err=>{
    res.status(500).json({
        msg:"internal server error",
        err
    })
})
});

module.exports = router;
