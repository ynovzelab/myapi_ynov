const Order = require('../models/order.model');
const User = require('../models/user.model');

exports.create = (req, res) => {

    const order = new Order({
        total: req.body.total,
        products: req.body.products,
        user: req.body.user,
    });

  order
    .save()
    .then((data) => {
      User.findByIdAndUpdate(req.body.user, {orders: data._id}).then(() => {
        res
          .send({
            data: data,
          })
          .catch((err) => res.send(err));
      });
      res.send({
        data: data,
      });
    })
    .catch((err) => res.send(err));
};

exports.getOrders = (req, res) => {
  Order.find()
    .populate('user')
    .populate('products')
    .then((data) => {
      res.send({
        data: data,
      });
    })
    .catch((err) => res.send(err));
};

exports.getOrder = (req, res) => {
  Order.findById(req.params.id)
    .populate('user')
    .populate('products')
    .then((data) => {
      res.send({
        data: data,
      });
    })
    .catch((err) => res.send(err));
};
