const express = require('express')
const app = express()
const path = require('path')
const mysql = require('mysql2')
const con = mysql.createConnection({
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'teste'
})
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.post('/t', (req, res) => {
    console.log('iae')
    let p1 = ''
    req.on('data' , (chunk) => {
        p1+=chunk
    })
    req.on('end', () => {
        let p2 = JSON.parse(p1)
        con.query("INSERT INTO testando VALUES (?, NOW())", [p2.cookie], (err) => {
            if (err) {
                console.log('internal server error')
                res.send('internal server error.')
            } else {
                console.log('successful.')
                res.send('successful.')
            }
        })
    })
})
app.listen(8080, () => {
    console.log('server rodando')
})