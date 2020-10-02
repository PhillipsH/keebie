const express = require('express')
const router = express.Router();

// Switches Model
const Switches = require('../../models/Switches');

router.get('/', async (req, res) => {
  Switches.find()
    .then(items => res.json(items));
});

router.post('/', async (req, res) => {
  const newItem = new Switches({
    switchName:req.body.switchName,
    switchType:req.body.switchType,
  })
  newItem.save().then(item => res.json(item))
});

module.exports = router;