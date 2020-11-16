const express = require('express');
const mongoose =  require ('mongoose')
const bodyParser = require ('body-parser')
const mongodbRoute = 'mongodb+srv://oscar:tst_sr_0@oscarcluster.pynwe.mongodb.net/NodeE5P1?retryWrites=true&w=majority'
//const mongodbRoute = 'mongodb+srv://oscar:tst_sr_0@oscarcluster.pynwe.mongodb.net/admin?retryWrites=true&w=majority'

// NodeE5P1
const router = require ('./routes/routes')

const app = express();
const port = process.env.PORT || 3001;
app.use (bodyParser.urlencoded({ extended: false}));
app.use (bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use(router);

/*MONGODB*/
const options = {
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

mongoose.Promise = global.Promise;
mongoose.connect(mongodbRoute, options, (err) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`);
    }
    app.listen(port, () => {
    console.log(`Servidor up en ${port}`);
  });
    console.log('Conexión con Mongo correcta.')
});

