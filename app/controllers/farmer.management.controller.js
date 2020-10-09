const db = require("../models"); 
const Farmers = db.farmer;
const Op = db.Sequelize.Op;

// Create and Save a new farmer
exports.create = (req, res) => {
  // Validate request
  if (!req.body.farmerName) {
    //   farmername means title
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a farmer
  const farmer = {
    farmerName: req.body.farmerName,
    contact: req.body.contact  ,
    // batchId: req.body.batchId,
    validity: req.body.validity ? req.body.validity : false,
  };

  // Save farmer in the database
  Farmers.create(farmer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the farmer.",
      });
    });
};

// Retrieve all farmers from the database.
exports.findAll = (req, res) => {
    //need to check
  const farmerName = req.query.farmerName; //farmername means title  

  var condition = farmerName ? {farmerName: { [Op.like]: `%${farmerName}%` } } : null;

  Farmers.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving farmers.",
      });
    });
};

// Find a single farmewr with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Farmers.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving farmer with id=" + id,
      });
    });
};

// Update a farmer by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Farmers.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "farmer was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update farmer with id=${id}. Maybe farmer was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating farmer with id=" + id,
      });
    });
};

// Delete a farmer with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  
  Farmers.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "farmer was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Farmer with id=${id}. Maybe farmer was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete farmer with id=" + id,
      });
    });
};

// Delete all farmers from the database.
exports.deleteAll = (req, res) => {
  Farmers.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Farmers were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Farmers.",
      });
    });
};

// Find all published FArmeres
exports.findAllValidated = (req, res) => {
  Farmers.findAll({ where: { validity: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Farmers.",
      });
    });
};
