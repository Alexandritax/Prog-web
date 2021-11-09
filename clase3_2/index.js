const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const db = require('./dao/models')

const PORT = 5000
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}))
app.use(express.static('assets')) // soporte de archivos estaticos
app.set('view engine', 'ejs') // Configuramos el motor de templates
app.use(session({
    secret : "daleu",
    resave : false,
    saveUninitialized : false
})) 
app.get('/', (req, res) => {
/*     const listaEventos = [
        {
            id: 1,
            nombre: 'Torneo Marzo 2021'
        },
        {
            id: 2,
            nombre: 'Torneo Junio 2021'
        },
        {
            id: 3,
            nombre: 'Torneo Setiembre 2021'
        }
    ];

    const listaTopPlayers = [
        {
            nombre:"billy",
            maps:34,
            rounds:23,
            k_d:10,
            k__d:11,
            rating:4
        },
        {
            nombre:"joaquin",
            maps:12,
            rounds:10,
            k_d:11,
            k__d:10,
            rating:3.5
        },
        {
            nombre:"billy",
            maps:34,
            rounds:23,
            k_d:10,
            k__d:11,
            rating:4
        }
    ];
    res.render('index',{
        eventos : listaEventos,
        topPlayers: listaTopPlayers}) */

    })

app.get('/torneos', async (req, res) => {
    const timestampActual = new Date().getTime();
    const dif = timestampActual - req.session.lastLogin

    if (dif < 3 * 60 * 60 * 1000) {
        req.session.destroy() // Destruyes la sesion
        res.render('/login')
    }
    else {
        //Obtener torneos de la base de datos.
        const torneos = await db.Torneo.findAll();
        //console.log(torneos);
        res.render("torneos", {
        torneos: torneos
        })
    }    
})

app.get("/torneos_new", (req,res) => {
    res.render("torneos_new")
})


app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    if (username == "pw" && password == "123") {
        // Login correcto
        req.session.username = username // guardando variable en sesion
        res.redirect("/torneos")
    }else {
        res.redirect('/login')
    }
})

app.get('/login', (req, res)=> {
    if (req.session.username != undefined) {
        req.session.lastLogin = new Date().getTime()
        res.redirect('/torneos')
    }else {
        res.render('login')
    }
})

app.listen(PORT, ()=> {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
})