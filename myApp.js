let express = require('express');
let app = express();

const messageStyle = process.env.MESSAGE_STYLE

// Step 1 Solution
// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })

// Step 3 Solution
app.use('/public', express.static(__dirname + '/public'))

// Step 6 Solution
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

// Step 2 Solution
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

// Step 4 & 5 Solution
app.get('/json', (req, res) => {
    if (messageStyle === uppercase) {
        res.send({ message: 'HELLO JSON' })
    } else {
        res.send({ message: 'Hello json' })
    }
})

// Step 7 Solution
app.get('/now', (req, res, now) => {
    req.time = new Date().toString()
    next()
}, (req, res) => {
    res.json({ time: req.time })
})