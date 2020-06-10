const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const { check, validationResult } = require('express-validator');

const Meal = require('../../models/Meal');
const User = require('../../models/User');

// @route   POST api/meals
// @desc    Create a meal
// @acess   Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required').not().isEmpty(),
      check('calories', 'Calories are required').not().isEmpty(),
      check('carbohidrates', 'carbohidrates are required').not().isEmpty(),
      check('proteins', 'Proteins are required').not().isEmpty(),
      check('fats', 'Fats are required').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    try {
      /*    let units = []
    
    req.body.units.forEach(unit => {
      units.push()
    }) */

      const newMeal = new Meal({
        user: req.user.id,
        name: req.body.name,
        calories: req.body.calories,
        carbohidrates: req.body.carbohidrates,
        proteins: req.body.proteins,
        fats: req.body.fats,
      });

      const meal = await newMeal.save();

      res.json(meal);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
