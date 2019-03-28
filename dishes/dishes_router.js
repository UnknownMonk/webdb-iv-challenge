const router = require('express').Router();
const Dishes = require('../dishes/dishes-modles');

router.get('/', async (req, res) => {
  // get the roles from the database
  try {
    const roles = await Dishes.find(); // all the records from the table
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const dish = await Dishes.addDish(req.body);

    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({ error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dish = await Dishes.getDish(req.params.id);
    res.status(200).json(dish);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
