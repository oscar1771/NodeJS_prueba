//userController.js
const User = require('../models/userModel');

exports.getAllUsers = (req, res) => {
	
    User.find({}, (err, users) => {
        if(err) return res.status(500).send({message: 'Error al realizar la petición:'+err});
        if(!users) return res.status(404).send({message: 'No existen users'});
        res.status(200).send({users: users});
    });
};

exports.getUserById = (req, res) => {
	console.log('get enviado');
    let userId = req.params.id;
    User.findOne({_id: userId}, (err, user) => {
        if(err) return res.status(500).send({message: 'Error al realizar la petición: ${err}'});
        if(!user) return res.status(404).send({message: 'No existe ese user'});
        res.send({user: user});
        //Añadido
    });
};


exports.postUser = (req, res) => {
	console.log('post enviado');
	let newUser = new User();
  	Object.assign(newUser, req.body);
  	newUser.save()
  	.then((newUser) => {
    	console.log({newUser:newUser});
    	res.send({newUser:newUser});
  	})       
  	.catch(err => console.error('El usuario no ha podido guardarse: ', err));

};


