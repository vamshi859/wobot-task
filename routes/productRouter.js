const express = require('express');
const router = express.Router();
const productData = require('../models/productModal');

router.post('/addproduct',async (req, res) => {
    console.log(req.body)
    try {
      const items = req.body;
      var product = [];
      items.forEach(item => {
          product.push(
            {
              insertOne: {
                document: item
              }
            }
          )
      })
      await productData.bulkWrite(product, { ordered: false });
      res.status(200).send("Products created");
    } catch (err) {
      res.status(500).send("Products not created");
    }
  })

  router.get('/getProducts',async (req,res) => {
    let products = await productData.find({});
    res.send(products)
  })

module.exports = router;