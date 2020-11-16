const validator = require('validator');

module.exports = function (req, res, next) {
		if (!validator.isEmail(req.body.email)) 
		{
			res.status(400).send({message: `Email inválido`});	
		}
		else if (!validator.isAlpha(req.body.name)) 
		{
			res.status(400).send({message: `Nombre inválido`});
		}
		else if (!validator.isAlpha(req.body.surname)) 
		{
			res.status(400).send({message: `Apellido inválido`});
		}
		else
		{
			return next();
		}
		
	
    	
};