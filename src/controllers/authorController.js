const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conexi) => { 
    conexi.query('SELECT * FROM authors;', (err, rows) => { // rows es un array
      if (err) {
        res.json(err);
      } else {
        res.render('authors', { // renderiza authors.ejs
          data: rows // le pasamos las filas de mysql a la vista ejs
        }); 
      }
    });
  }); // agrega a req ese metodo getConnection del paquete myconnection
};

module.exports = controller;