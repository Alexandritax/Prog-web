const express = require('express');
const bodyParser = require('body-parser')

const app = express()
const PORT = 4444
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('assets'))
//endpoints
app.get('/ejemplo1',(req,res) => {
    const textoResponse = "Hola PW"
    res.send(textoResponse)
})

app.get('/ejemplo2',(req,res) => {
    const htmlResponse = "<h1>Hola PW</h1>"
    res.send(htmlResponse)
})

//recibir data mediante path
//http://localhost:4444/ejemplo3/Alejandro/Jfss2205
app.get('/ejemplo3/:nombre/:codigo',(req,res) => {
    const nombreUsuario = req.params.nombre
    const htmlResponse = "<h1>Hola " + nombreUsuario + "</h1>" + 
        "<h2>" + req.params.codigo + "</h2>"
    res.send(htmlResponse)
})

//recibir dada mediante query parameters
//http://localhost:4444/ejemplo4/?nombre=Alejandro&codigo=Jfss2205
app.get("/ejemplo4",(req, res) => {
    const nombre = req.query.nombre
    const codigo = req.query.codigo
    const htmlResponse = "<h1>Hola " + nombre + "</h1>" + 
        "<h2>" + codigo + "</h2>"
    res.send(htmlResponse)
})

//recibir data por medio de forms
app.get('/ejemplo5-formulario',(req,res) => {
    const formulario = "<form method='post' action='/ejemplo5-formulario'>" + 
        "<div>Nombre: <input name='frm_nombre' type='text'/></div>" +
        "<div>Codigo: <input name='frm_codigo' type='text'/></div>" +
        "<div><button type='submit'>Enviar</button></div>" +
    "</form>"
    res.send(formulario)
})

// Endpoint que recibe los datos del formulario
app.post('/ejemplo5-formulario',(req,res)=> {
    console.log("data-form",req.body)
    res.send(`<img src='/images/logo.png'/><script src='/js/index.js'></script><h1>${req.body.frm_nombre}</h1><h2>${req.body.frm_codigo}</h2>`)//en mi pc la combinacion alt*derecho + \ da ` en el teclado español 
})

app.listen(PORT, () => {
    console.log("se ha iniciado el servidor en el puerto " + PORT)
})