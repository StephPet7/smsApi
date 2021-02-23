module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
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
        telephone: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        pays: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        codeVerificationEmail: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        codeVerificationPhone: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        emailVerified: DataTypes.BOOLEAN,
        phoneNumberisVerified: DataTypes.BOOLEAN,
        activated: DataTypes.BOOLEAN,
        API_KEY: DataTypes.STRING(50),
        API_LOGIN: DataTypes.STRING(50)
    })

    return User
}
