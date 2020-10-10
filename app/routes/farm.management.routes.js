module.exports = (app) => {
  const farm = require("../controllers/farm.management.controller.js");

  var router = require("express").Router();

  // Create a new farm
  router.post("/", farm.create);

  // Retrieve all farm
  router.get("/", farm.findAll);

  // Retrieve all published farm
  router.get("/validated", farm.findAllValidated);

  // Retrieve a single farm with id
  router.get("/:id", farm.findOne);

  // Update a farm with id
  router.put("/:id", farm.update);

  // Delete a farm with id
  router.delete("/:id", farm.delete);

  // Delete all farms
  router.delete("/", farm.deleteAll);

  app.use("/api/farm-management/farms", router); //necessary for client side
};
