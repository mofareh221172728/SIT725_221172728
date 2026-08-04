const express = require('express');

const app = express();
const PORT = 3000;

const booksRoute = require('./routes/books.routes');

app.use(express.static(__dirname + '/public'));
app.use(express.json());

app.use('/api/books', booksRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});