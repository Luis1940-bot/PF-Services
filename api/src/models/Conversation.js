const { DataTypes } = require('sequelize');

module.exports =(sequelize)=>{
    sequelize.define("Conversations",{
        senderId:{
        type: DataTypes.INTEGER
        },
        senderName:{
            type:DataTypes.STRING
        },
        senderImg:{
            type:DataTypes.STRING
        },
        receiverId:{
            type:DataTypes.INTEGER
        },
        receiverName:{
            type:DataTypes.STRING
        },
        receiverImg:{
            type:DataTypes.STRING
        },
    },
    {timestamps:true})
        
    
}

