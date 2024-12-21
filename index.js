const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from your Node.js server!');
});

const PORT = 45;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});