const express = require('express');
const LemonadeInventory = require('./../models/lemonade');

const lemonadeRouter = express.Router();

// Get Inventory
lemonadeRouter.get('/', (req, res) => {
  LemonadeInventory
    .find()
    .then((inventory) => {
      console.log(inventory, 'inventory');
      return res.json(inventory);
    })
});


lemonadeRouter.put('/:id', (req, res) => {
  const inventoryID = req.params.id;
  LemonadeInventory.findByIdAndUpdate(inventoryID, req.body)
    .then((updatedInventory) => {
      console.log(updatedInventory, 'updated inventory');
      return res.json(updatedInventory);
    })

});




module.exports = lemonadeRouter;