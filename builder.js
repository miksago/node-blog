var Markdown = require('markdown'),
    sys = require('sys'),
    http = require('http');

http.createServer(function (req, res) {
  res.sendHeader(200, {'Content-Type': 'text/plain'});
  res.sendBody('Thanks for the tip!');
  res.finish();
  sys.p(req);
  sys.puts("Got an update tip, do something please.");
}).listen(4242);
sys.puts('Server running at http://127.0.0.1:4242/');