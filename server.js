const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});