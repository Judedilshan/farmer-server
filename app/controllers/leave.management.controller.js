// const db = require("../models");
// const VetTask = db.leave_policy;
// const Op = db.Sequelize.Op;

// // Create and Save a new Leave Policy
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body.amount) {
//     //   policy means title
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//     return;
//   }

//   // Create a Leave Policy
//   const amount = {
//     amount: req.body.amount,
//     des: req.body.des  ,
//     batchId: req.body.batchId,
//     validity: req.body.validity ? req.body.validity : false,
//   };

//   // Save Leave Policy in the database
//   VetTask.create(amount)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Leave Policy.",
//       });
//     });
// };

// // Retrieve all Leave Policies from the database.
// exports.findAll = (req, res) => {
//   const amount = req.query.amount; //policy means title
//   var condition = amount ? {amount: { [Op.like]: `%${amount}%` } } : null;

//   VetTask.findAll({ where: condition })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Leave Policies.",
//       });
//     });
// };

// // Find a single Leave Policy with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   VetTask.findByPk(id)
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error retrieving Leave Policy with id=" + id,
//       });
//     });
// };

// // Update a Leave Policy by the id in the request
// exports.update = (req, res) => {
//   const id = req.params.id;

//   VetTask.update(req.body, {
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "Leave Policy was updated successfully.",
//         });
//       } else {
//         res.send({
//           message: `Cannot update Leave Policy with id=${id}. Maybe Leave Policy was not found or req.body is empty!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Error updating Leave Policy with id=" + id,
//       });
//     });
// };

// // Delete a Leave Policy with the specified id in the request
// exports.delete = (req, res) => {
//   const id = req.params.id;

//   VetTask.destroy({
//     where: { id: id },
//   })
//     .then((num) => {
//       if (num == 1) {
//         res.send({
//           message: "Leave Policy was deleted successfully!",
//         });
//       } else {
//         res.send({
//           message: `Cannot delete Leave Policy with id=${id}. Maybe Leave Policy was not found!`,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: "Could not delete Leave Policy with id=" + id,
//       });
//     });
// };

// // Delete all Leave Policies from the database.
// exports.deleteAll = (req, res) => {
//   VetTask.destroy({
//     where: {},
//     truncate: false,
//   })
//     .then((nums) => {
//       res.send({
//         message: `${nums} Leave Policies were deleted successfully!`,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message ||
//           "Some error occurred while removing all Leave Policies.",
//       });
//     });
// };

// // Find all published Leave Policies
// exports.findAllValidated = (req, res) => {
//   VetTask.findAll({ where: { validity: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving Leave Policies.",
//       });
//     });
// };
