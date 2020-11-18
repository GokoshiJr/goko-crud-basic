const express = require('express'); // framework de node
const path = require('path'); // nativo de node
const morgan = require('morgan'); // middleware
const { urlencoded } = require('express'); // para recibir los datos del form html

// para la conexion con la bd
const mysql = require('mysql');
const mysqlConnection = require('express-myconnection'); 

// instanciamos una funcion de express que seria el servidor
const app = express();

// settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// bd settings
const database = {
  host: 'localhost',
  user: 'root',
  password: '$R5t6u8.',
  port: 3306,
  database: 'goko_operation'
}

// middlewares
app.use(morgan('dev'));
app.use(mysqlConnection(mysql, database, 'single'));
app.use(urlencoded({extended: false})); 
/* 
  urlencoded, permite entender los datos que vienen desde el formulario de html, 
  false porque no recibimos imagenes o nada encriptado 
*/

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