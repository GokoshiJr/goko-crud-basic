const express = require('express');
const path = require('path'); // nativo de node
const morgan = require('morgan');

// para la conexion con la bd
const mysql = require('mysql');
const mysqlConnection = require('express-myconnection'); 

// instanciamos una funcion de express que seria el servidor
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middlewares
app.use(morgan('dev'));

// bd settings
const database = {
  host: 'localhost',
  user: 'root',
  password: '$R5t6u8.',
  port: 3306,
  database: 'goko_operation'
}
app.use(mysqlConnection(mysql, database, 'single'));

// importing routes
const userRoutes = require('./routes/author');

// routes
app.use('/', userRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`Server on port 3000`);
});