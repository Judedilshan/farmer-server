module.exports = (sequelize, Sequelize) => {
  const Farmer = sequelize.define("farmer", {
    //in here policy means tutorial
    farmerName: {
      //in here policy means title
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    // batchId: {
    //   type: Sequelize.STRING,
    // },
    validity: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Farmer;
};
  