const controller = {};

controller.list = (req, res) => {
  
  req.getConnection((err, conexi) => {
    res.send('Hola mundo soy Gokoshi Jr');
  }); // agrega a req ese metodo getConnection del paquete myconnection
};

module.exports = controller;