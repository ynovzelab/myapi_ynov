const Product = require('../models/product.model');

exports.create = (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    imgUrl: req.body.imgUrl,
  });

  product
    .save()
    .then((data) => {
      res.send({
        product: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: 500,
        message: err.message || 'some error occured while creating user',
      });
    });
};

exports.getProduct = (req, res) => {
  Product.findById(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

exports.getProducts = (req, res) => {
  Product.find()
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product with id ${req.params.id} not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => res.send(err));
};

