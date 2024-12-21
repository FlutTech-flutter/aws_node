const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from your Node.js server!');
});

const PORT = process.env.PORT || 80;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});