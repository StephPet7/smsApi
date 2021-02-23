module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define('Message', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        expediteur: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        destinataire: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })

    return Message
}
