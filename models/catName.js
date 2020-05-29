module.exports = function(sequelize, DataTypes) {
    var CatName = sequelize.define("CatName", {
        name: DataTypes.STRING
    });
    return CatName;
}