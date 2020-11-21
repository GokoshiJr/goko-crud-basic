const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conexi) => {
    conexi.query("SHOW tables;", (err, rows, fields) => {
      // rows es un array
      if (err) {
        res.json(err);
      } else {
        res.render("index", {
          // renderiza authors.ejs
          data: rows, // le pasamos las filas de mysql a la vista ejs

        });
        // console.log(fields); campos de las tablas
      }
      console.log(rows);
    });
  }); // agrega a req ese metodo getConnection del paquete myconnection
};

module.exports = controller;