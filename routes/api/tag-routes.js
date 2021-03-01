const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    include: [{ model: Product }],
  }).then((tag) => res.json(tag));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Tag.findOne({
    include: [{ model: Product }],
    where: { id: id },
  }).then((tag) => res.json(tag));
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => {
      res.status(200).json(tag);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

//TODO: this.put
router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Tag.destroy({
    where: { id: id },
  }).then((data) => res.json(data));
});

module.exports = router;
