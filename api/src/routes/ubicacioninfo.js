const router = require("express").Router();
const db = require("../db.js");
const axios = require ("axios");

router.get("/provincias", async (req,res)=>{
    
    const provincias = await axios.get("https://apis.datos.gob.ar/georef/api/provincias");
    const provincias2= provincias.data.provincias.map(e => e.nombre)
    console.log(provincias)
    console.log(provincias2)
    res.send(provincias2)
})

router.get("/departamentos", async (req,res)=>{
    
    const departamentos = await axios.get("https://apis.datos.gob.ar/georef/api/departamentos");
    const departamentos2= departamentos.data.departamentos.map(e => e.nombre)
    console.log(departamentos)
    console.log(departamentos2)
    res.send(departamentos2)
})















module.exports = router;