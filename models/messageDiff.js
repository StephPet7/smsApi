module.exports = (sequelize, DataTypes) => {
    const MessageDiff = sequelize.define('MessageDiffusion', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        diffusion: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })

    return MessageDiff
}
