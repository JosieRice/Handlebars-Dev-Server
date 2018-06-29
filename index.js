const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

// Register Handlebars view engine
app.engine('hbs', exphbs());
// Use Handlebars view engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('templates/widget');
});

app.listen(3000, () => {
  console.log('Example app is running → PORT 3000');
});