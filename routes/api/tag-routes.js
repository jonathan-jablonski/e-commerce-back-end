const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  Tag.findAll({
    include: [{model: Product, through: ProductTag}]
  }).then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err))
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  Tag.findOne({ where: {
    id: req.params.id
  },
    include: [{model: Product, through: ProductTag}]
  }).then((tag) => res.json(tag))
    .catch((err) => res.status(500).json(err))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  Tag.create(req.body).then((tag) => res.status(201).json(tag))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(req.body, { where: {
    id: req.params.id
  },
  }).then((product) => res.json(product))
    .catch((err) => res.status(500).json(err))
});

router.delete('/:id', (req, res) => {
  Tag.destroy({ where: {
    id: req.params.id
  },
  }).then((product) => res.json(product))
    .catch((err) => res.status(404).json(err))
});

module.exports = router;
