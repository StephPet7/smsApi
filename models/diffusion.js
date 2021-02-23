module.exports = (sequelize, DataTypes) => {
    const Diffusion = sequelize.define('Diffusion', {
        id: {
            type: DataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        dateDiffusion: {
            type: DataTypes.DATE,
            allowNull: false
        },
    })

    return Diffusion
}
