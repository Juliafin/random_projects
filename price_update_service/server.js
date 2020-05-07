const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');

const app = express();
const propertySchema = mongoose.Schema({
  address: {
    type: mongoose.SchemaTypes.String
  },
  basePrice: {
    type: mongoose.SchemaTypes.Number
  },
  bathrooms: {
    type: mongoose.SchemaTypes.Number
  },
  city: {
    type: mongoose.SchemaTypes.String
  },
  description: {
    type: mongoose.SchemaTypes.String
  },
  displayPictureUrl: {
    type: mongoose.SchemaTypes.String
  },
  dynamicDisplayPrice: [{
    price: mongoose.SchemaTypes.Number,
    date: mongoose.SchemaTypes.Date

  }],
  id: {
    type: mongoose.SchemaTypes.String,
    unique: true
  },
  occupancyRate: {
    type: mongoose.SchemaTypes.Number
  },
  ownerId: {
    type: mongoose.SchemaTypes.String
  },
  state: {
    type: mongoose.SchemaTypes.String
  },
  totalRevenue: {
    type: mongoose.SchemaTypes.Number
  },
  type: {
    type: mongoose.SchemaTypes.String
  }
})

const Property = mongoose.model('Property', propertySchema);





const getPrices = async() => {
  setInterval(async() => {
    const properties = await axios({
      method: 'get',
      url: 'https://interview.domio.io/properties/'
    })
    // console.log('properties', JSON.stringify(properties.data, null, 2));

    // properties.data.properties.forEach(async (element) => {
      for (let i = 0; i < properties.data.properties.length; i++ ) {
      const element = properties.data.properties[i]
      const property = {...element};
      property.dynamicDisplayPrice = [];
      const currentPrice = {
        date: Date.now(),
        price: element.dynamicDisplayPrice
      }
      // const propertyId = mongoose.Types.ObjectId(element._id);
      let propertyCount;
      try {
        propertyCount = await Property.findOne({id: element.id})
      } catch(err) {
        console.log(err, 'there was an error');
      }
      console.log('property count', propertyCount)

      if (!propertyCount) {
        property.dynamicDisplayPrice.push(currentPrice)
        await Property.create(property);
        console.log('document created');
      } else {
        propertyCount.dynamicDisplayPrice.push(currentPrice)
        await propertyCount.save();
        console.log('document saved')
      }

    };


  }, 15000)
}


app.use(express.json())

app.get('/prices', async (req, res) => {
  const properties = await Property.find();
  res.json({properties});
})



// getPrices();

app.listen(9001, () => {
  console.log('server is listening');
  mongoose.connect('mongodb://localhost:27017/companyprices', { useNewUrlParser: true } ,  () => {
    console.log('mongoose is connected');
    getPrices();
  })
})