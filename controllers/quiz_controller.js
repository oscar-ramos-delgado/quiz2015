// GET /quizes/question

exports.question = function (req, res){
  res.render('quizes/question', {pregunta: 'capital de Italia'});
}

// GET /quizes/answer

exports.answer = function(req, res){
	if (req.query.respuesta === 'roma'){
		res.render('quizes/answer', {respuesta: 'correcto'});
	}else{
		res.render('quizes/answer', {respuesta: 'incorrecto'});
	}
};