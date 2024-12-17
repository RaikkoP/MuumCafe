const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Only one public route exists others are blocked behing password protection
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log('Listening on port ' + port);
})