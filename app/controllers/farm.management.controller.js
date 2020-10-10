const db = require("../models"); 
const Farms = db.farm;
const Op = db.Sequelize.Op;

// Create and Save a new farm
exports.create = (req, res) => {
  // Validate request
  if (!req.body.farmName) {
    //   farmname means title
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a farm
  const farm = {
    farmName: req.body.farmName,
    farmId: req.body.farmId,
    contact: req.body.contact  ,
    validity: req.body.validity ? req.body.validity : false,
  };

  // Save farm in the database
  Farms.create(farm)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the farm.",
      });
    });
};

// Retrieve all farms from the database.
exports.findAll = (req, res) => {
    //need to check
  const farmName = req.query.farmName; //farmname means title  

  var condition = farmName ? {farmName: { [Op.like]: `%${farmName}%` } } : null;

  Farms.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving farms.",
      });
    });
};

// Find a single farm with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Farms.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving farm with id=" + id,
      });
    });
};

// Update a farm by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Farms.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "farm was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update farm with id=${id}. Maybe farm was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating farm with id=" + id,
      });
    });
};

// Delete a farm with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  
  Farms.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "farm was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Farm with id=${id}. Maybe farm was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete farm with id=" + id,
      });
    });
};

// Delete all farme from the database.
exports.deleteAll = (req, res) => {
  Farms.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Farms were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Farms.",
      });
    });
};

// Find all published FArm
exports.findAllValidated = (req, res) => {
  Farms.findAll({ where: { validity: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Farms.",
      });
    });

  };
