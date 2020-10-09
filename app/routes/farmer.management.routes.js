module.exports = (app) => {
  const farmer = require("../controllers/farmer.management.controller.js");

  var router = require("express").Router();

  // Create a new farmer
  router.post("/", farmer.create);

  // Retrieve all farmers
  router.get("/", farmer.findAll);

  // Retrieve all published farmers
  router.get("/validated", farmer.findAllValidated);

  // Retrieve a single farmer with id
  router.get("/:id", farmer.findOne);

  // Update a farmer with id
  router.put("/:id", farmer.update);

  // Delete a farmer with id
  router.delete("/:id", farmer.delete);

  // Delete all farmers
  router.delete("/", farmer.deleteAll);

  app.use("/api/farmer-management/farmers", router); //url- necessary for client side
};
