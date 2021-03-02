// const User = require('../models/user.model');
// const bcrypt = require('bcrypt');

// exports.create = (req, res) => {
    
//   let hashedPassword = bcrypt.hashSync(req.body.password, 10);

//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     password: hashedPassword,
//   });

//   user
//     .save()
//     .then((data) => {
//       res.send({
//         user: data,
//         created: true,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         error: 500,
//         message: err.message || 'some error occured while creating user',
//       });
//     });
// };

// exports.findOne = (req, res) => {
//   User.findById(req.params.id)
//     .then((data) => {
//       if (!data) {
//         res.status(404).send({
//           message: `User with id ${req.params.id} not found`,
//           // message:"User with id" + req.params.id +"not found"
//         });
//       }
//       res.send(data);
//     })
//     .catch((err) => res.send(err));
// };
