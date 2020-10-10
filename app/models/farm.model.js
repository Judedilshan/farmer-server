module.exports = (sequelize, Sequelize) => {
  const Farm = sequelize.define("farm", {
 
    farmName: {
   
      type: Sequelize.STRING,
    },
    farmId: {
      type: Sequelize.STRING,
    },
    contact: {
      type: Sequelize.STRING,
    },
    
    validity: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Farm;
};
  