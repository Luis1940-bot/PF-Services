const { Router} = require('express');
const axios = require("axios")
const {Message} = require('../db')
const router = Router();


router.post("/message", async (req,res)=>{
    const {text , conversationId, sender} = req.body;
    try{
     const mensaje = await Message.create({
        text: text,
        conversationId: conversationId,
        sender:sender
      })
      res.status(200).json(mensaje)
    }
    catch(err){
      res.status(500).send(err)
    }
  })
  router.get("/allmessage/:conversationId", async (req,res) =>{
    const {conversationId} = req.params;
    try{
    const allmessage = await Message.findAll({
      where:{
        conversationId: conversationId
      }
    })
    res.status(200).json(allmessage)
  } catch(err){
    res.send (error)
  } 
  })

    
module.exports = router;