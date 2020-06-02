module.exports = function(sequelize, DataTypes) {
    var PantryVisit = sequelize.define("PantryVisit", {
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        locationId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },        

        streetAddress: {
            type: DataTypes.STRING,
            allowNull: false
        },

        aptNumber: {
            type: DataTypes.STRING
        },
 
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false
        },

        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },

        numAdults: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        numChildren: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        numSeniors: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        workerId: {
            type: DataTypes.INTEGER
        }
    });
    return PantryVisit;
}