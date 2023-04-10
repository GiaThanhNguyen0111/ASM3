const express = require('express');
const bodyParser = require('body-parser');
const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.use(homeRoutes);
app.use(usersRoutes);





app.listen(3000, function() {
    console.log("Accessed to PORT 3000");
})
