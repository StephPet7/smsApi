module.exports = (sequelize, DataTypes) => {
    const Contact = sequelize.define('Contact', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nom: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        numero: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        user: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    })

    return Contact
}
