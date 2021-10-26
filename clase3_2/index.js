const express = require('express');

const PORT = 5000;
const app = express();

app.use(express.static('assets'))
app.set("view engine", 'ejs')

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

app.listen(PORT, ()=> {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
})