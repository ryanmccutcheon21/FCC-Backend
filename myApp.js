let express = require('express');
let app = express();

// Step 1 Solution
// app.get('/', (req, res) => {
//     res.send('Hello Express')
// })

// Step 3 Solution
app.use('/public', express.static(__dirname + '/public'))

// Step 2 Solution
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})