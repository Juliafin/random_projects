const mongoose = require('mongoose');

const lemonadeInventoryModel = new mongoose.Schema({

  sugar: {
    type: Number
  },
  lemons: {
    type: Number
  },
  water: {
    type: Number
  }

});

const LemonadeInventory = mongoose.model('inventory', lemonadeInventoryModel);

module.exports = LemonadeInventory;
