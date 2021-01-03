var express = require('express');
var path = require('path');
var app = express();

app.set('port', process.env.PORT || 3000);

var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html'],
  index: false
};

app.use(express.static(path.join(__dirname, 'public') , options    ));

app.listen(app.get('port'),  function () {

	

  console.log('Hello express started on http://localhost:' +
  app.get('port') + '; press Ctrl-C to terminate.' );

})
