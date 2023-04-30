const express = require('express');
const app = express();

// Set up a route to serve the index.ejs file
app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/upload', function(req, res) {
  // handle the upload request
});

// Set up a static route to serve files from the public directory
app.use(express.static('public'));



// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
