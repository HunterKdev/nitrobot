var http = require('http');

  http.createServer(function (req, res) {
      res.write("Leo Bot 7/ 24");
      res.end();
  }) .listen(8080)//8080