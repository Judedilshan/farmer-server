// module.exports = (app) => {
//   const detailss = require("../controllers/leave.management.controller.js");

//   var router = require("express").Router();

//   // Create a new Leave Policy
//   router.post("/", detailss.create);

//   // Retrieve all Leave Policies
//   router.get("/", detailss.findAll);

//   // Retrieve all published Leave Policies
//   router.get("/validated", detailss.findAllValidated);

//   // Retrieve a single Leave Policy with id
//   router.get("/:id", detailss.findOne);

//   // Update a Leave Policy with id
//   router.put("/:id", detailss.update);

//   // Delete a Leave Policy with id
//   router.delete("/:id", detailss.delete);

//   // Delete all Leave Policies
//   router.delete("/", detailss.deleteAll);

//   app.use("/api/leave-management/leave-policies", router);
// };
