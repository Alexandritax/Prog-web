const express = require('express');

const PORT = 5000;
const app = express();

app.use(express.static('assets'))
app.set("view engine", 'ejs')

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, ()=> {
    console.log(`El servidor inicio correctamente en el puerto ${PORT}`);
})