const {DataTypes} = require  ("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Message",{
        conversationId:{
            type: DataTypes.STRING
        },
        sender:{
            type: DataTypes.STRING
        },
        text:{
            type: DataTypes.STRING
        }
    }, {timestamps: true})
}