let express = require('express');
let app = express();

// Step 1 Solution
// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})