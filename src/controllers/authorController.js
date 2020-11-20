const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conexi) => {
    conexi.query("SELECT * FROM authors;", (err, rows, fields) => {
      // rows es un array
      if (err) {
        res.json(err);
      } else {
        res.render("authors", {
          // renderiza authors.ejs
          data: rows, // le pasamos las filas de mysql a la vista ejs
        });
        // console.log(fields); campos de las tablas
      }
    });
  }); // agrega a req ese metodo getConnection del paquete myconnection
};

/* Recibe los datos del formulario */
controller.save = (req, res) => {
  const data = req.body;
  req.getConnection((err, conexi) => {
    conexi.query(
      "INSERT INTO authors (name, nacionality) VALUES (?, ?);",
      [data.name, data.nacionality],
      (err, rows) => {
        // rows es un array
        if (err) {
          res.json(err);
        } else {
          res.redirect("/");
        }
      }
    );
  });
};

/* Recibe un id de la url */
controller.delete = (req, res) => {
  const { id } = req.params; // desestructurar el objeto
  req.getConnection((err, conexi) => {
    conexi.query(
      "DELETE FROM authors WHERE author_id = ?",
      [id],
      (err, rows) => {
        // rows es un array
        if (err) {
          res.json(err);
        } else {
          res.redirect("/");
        }
      }
    );
  });
};

/* Para mostrar los datos en el formulario de edicion */
controller.edit = (req, res) => {
  const { id } = req.params; // desestructurar el objeto
  req.getConnection((err, conexi) => {
    conexi.query(
      "SELECT * FROM authors WHERE author_id = ?",
      [id],
      (err, rows) => {
        // rows es un array
        if (err) {
          res.json(err);
        } else {
          res.render("author_edit", {
            // renderiza authors.ejs
            data: rows[0], // le pasamos las filas de mysql a la vista ejs
          });
        }
      }
    );
  });
};

/* Recibimos un id de la url y tambien datos para actualizarlos en la bd */
controller.editUpdate = (req, res) => {
  const { id } = req.params; // desestructurar el objeto
  const { name, nacionality } = req.body;
  req.getConnection((err, conexi) => {
    conexi.query(
      "UPDATE authors SET name = ?, nacionality = ? WHERE author_id = ?",
      [name, nacionality, id],
      (err, rows) => {
        if (err) {
          res.json(err);
        } else {
          res.redirect("/");
        }
      }
    );
  });
};

module.exports = controller;
