

//console.log("hola");

const express = require("express");

const cors = require("cors");
const { query } = require("express");

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.use(cors());

app.get('/suma', (req,res) =>{

    let status = 200;
    let response = "";

    if (!req.query.numero1 || !req.query.numero2) {
        status = 400;
        response = "error recibir los datos"
    }else{
        var n2 = parseFloat(req.query.numero2);
        var n1 = parseFloat(req.query.numero1);
        
        response = n1+n2;

    }
    //console.log(req.query);

    res.status(status).json({
        Resultado: response
    });

});

app.get('/resta', (req,res) =>{

    let status = 200;
    let response = "";

    if (!req.query.numero1 || !req.query.numero2) {
        status = 400;
        response = "error recibir los datos"
    }else{
        var n2 = parseFloat(req.query.numero2);
        var n1 = parseFloat(req.query.numero1);
        
        response = n1-n2;

    }
    //console.log(req.query);

    res.status(status).json({
        Resultado: response
    });

});

app.get('/multiplicacion', (req,res) =>{

    let status = 200;
    let response = "";

    if (!req.query.numero1 || !req.query.numero2) {
        status = 400;
        response = "error recibir los datos"
    }else{
        var n2 = parseFloat(req.query.numero2);
        var n1 = parseFloat(req.query.numero1);
        
        response = n1*n2;

    }
    //console.log(req.query);

    res.status(status).json({
        Resultado: response
    });

});

app.get('/division', (req,res) =>{

    let status = 200;
    let response = "";

    if (!req.query.numero1 || !req.query.numero2) {
        status = 400;
        response = "error recibir los datos"
    }else{
        var n2 = parseFloat(req.query.numero2);
        var n1 = parseFloat(req.query.numero1);
        
        response = n1/n2;

    }
    //console.log(req.query);

    res.status(status).json({
        Resultado: response
    });

});

app.listen(3000, () =>{
    console.clear();
    console.log("Servidor corriendo en el puerto 3000");

});

//console.log("hola loco");

