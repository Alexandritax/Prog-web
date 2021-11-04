const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const PORT = 5000;

const app = express();

app.use(express.static('assets'))
app.set("view engine", 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(session({ 
    secret : "daleu",
    resave: false,
    saveUninitialized: false
}))
app.get('/', (req, res) => {
    const listaEventos = [
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
        topPlayers: listaTopPlayers})
})

app.get('/torneos', (req, res)=> {
    res.render('torneos')
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
        res.redirect('/torneos')
    }else {
        res.render('login')
    }
})

app.listen(PORT, ()=> {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
})