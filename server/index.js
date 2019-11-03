const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { Mongoose } = require('./database');

const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev')); //Log server comunication with client on dev console
app.use(express.json()); //Prepare server to understand JSON
app.use(cors({ origin: 'http://localhost:4200' }));

//Routes
app.use('/api/employees', require('./routes/employee'));

//Start server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});