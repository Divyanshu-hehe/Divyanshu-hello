const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve portfolio.html as the default page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'portfolio.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio server running at http://localhost:${PORT}`);
});
