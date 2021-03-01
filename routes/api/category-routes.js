const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [{ model: Product }],
  }).then((product) => res.json(product));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Category.findOne({
    include: [{ model: Product }],
    where: { id: id },
  }).then((product) => res.json(product));
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
