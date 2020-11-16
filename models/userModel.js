// Cargamos el módulo de mongoose
const mongoose =  require('mongoose');

// Usaremos los esquemas
const Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
const UserSchema = Schema({
   name: String,
   surname: String,
   nick: String,
   email: String,
   password: String,
   role: String,
   image: String
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('user', UserSchema);