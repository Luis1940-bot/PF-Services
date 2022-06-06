const express = require("express");
const router = express.Router();
const db = require("../db.js");

router.put("/editprofessional",async(req,res)=>{
const professionalsData = req.body
const userFinded = await db.Professionals.findOne({where:{email:professionalsData.email}})
try{
if (userFinded){
    await userFinded.update(professionalsData)
    
} res.status(200).send("Se modificaron los datos correctamente")}


catch{res.status(200).send("El mail ingresado no se encuetra en la base de datos")}
});


module.exports = router;