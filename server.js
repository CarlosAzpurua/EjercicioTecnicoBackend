const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
//Secure info
dotenv.config();

//Connect to DB
require('./backend/database.js');

// SETTINGS
app.set('port', process.env.PORT || 4000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use('/userActions', require('./backend/routes/authUser.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port') || 4000, () =>
	console.log('Server up and running on port', process.env.PORT)
);
