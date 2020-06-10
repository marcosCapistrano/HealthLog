const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const moment = require('moment');

const Day = require('../../models/Day');

// @route   POST api/users
// @desc    Register user
// @acess   Private
router.post(
  '/',
  [
    auth,
    [
      check('user', 'ID de usuário é requerido').not().isEmpty(),
      check('weight', 'Por favor inclua o peso de hoje').not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ erros: errors.array() });
    }

    const today = moment().startOf('day');

    try {
      let day = await Day.find({
        date: {
          $gte: today.toDate(),
          $lte: moment(today).endOf('day').toDate(),
        },
      });

      if (day.length > 0) {
        return res.status(400).send({ errors: [{ msg: 'Day ja existe!' }] });
      }

      day = new Day({
        user: req.user.id,
        weight: req.body.weight,
      });

      await day.save();

      res.json(day);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT api/days/meal/:id
// @desc    Register new meal by day id
// @acess   Private
router.put(
  '/meal/:id',
  auth,
  [
    //check('date', 'Deve conter uma data').not().isEmpty(), TODO: no futuro descomentar
    check('meal', 'id da meal requerida').not().isEmpty(),
    check('amount', 'amount faltando').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors.array());
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    try {
      const day = await Day.findById(req.params.id);

      const newMeal = {
        date: new Date(), //TODO Adicionar aqui a data escolhida pelo usuario no FE
        meal: req.body.meal,
        amount: req.body.amount,
      };

      day.meals.unshift(newMeal);

      await day.save();
      res.json(day.meals);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

module.exports = router;
