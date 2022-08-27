const express = require('express')
const bodyPasrser = require('body-parser')


const app = express()
app.use(bodyPasrser.json())

app.get('/', (req, res) => {
    res.send('Home page')
});

app.get('/services', (req, res) => {
    res.send('Services Page this is data from backend')
});

app.get('/players', (req, res) => {
    const players = ['ronaldo', 'sachin', 'dhoni']

    res.send(players);
})

app.post('/login', (req, res) => {

    let username = req.body.username
    let password = req.body.password

    if(username === 'lumi' && password === 'pisi') {
        res.send('Login successfull')
    }
    else {
        res.send('Invalid credentiales')
    }

})

app.listen(5000, () => {
    console.log('Server started')
})