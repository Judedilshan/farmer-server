module.exports = (sequelize, Sequelize) => {
  const Farmer = sequelize.define("farmer", {
   
    farmerName: {     
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
      },
    email: {
        type: Sequelize.STRING,
      },
    validity: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Farmer;
};
  