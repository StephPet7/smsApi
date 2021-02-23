module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('ListDiffusion', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        contact: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        diffusion: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    })

    return List
}
