var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/iot', function(err) {
	if (err) {
		console.log(err)
	} else {
		console.log('connect mongodb iot success')
	}
})
