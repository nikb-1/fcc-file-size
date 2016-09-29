
s = require('express');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, "tmpfile");
  }
});
var upload = multer({ storage: storage, limits: {fileSize: 512000} });

var app = express();
app.use(express.static(__dirname + '/public'));

app.post('/getsize', upload.single('inFile'), function(req, res, next){
	res.end(JSON.stringify({size:req.file.size}));
});

app.get('/',function(req,res){
	res.sendFile('index.html');
});

app.listen(process.env.PORT || 8080, function () {
	console.log('File Metadata Microservice listening on port '+process.env.PORT||8080+'!');
});

app.use(function(err, req, res, next) {
	if (err.code=="LIMIT_FILE_SIZE"){
		console.error(err);
		console.error(err.stack);
		res.status(500).end('File too large!');
		return;
	}
  res.status(500).end('Error with file upload, try again!');
  next(err);
});ar express = require('express');
var multer  = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, "tmpfile");
  }
});
var upload = multer({ storage: storage, limits: {fileSize: 512000} });

var app = express();
app.use(express.static(__dirname + '/public'));

app.post('/getsize', upload.single('inFile'), function(req, res, next){
	res.end(JSON.stringify({size:req.file.size}));
});

app.get('/',function(req,res){
	res.sendFile('index.html');
});

app.listen(process.env.PORT || 8080, function () {
	console.log('Image Search Abstraction Layer listening on port '+process.env.PORT||8080+'!');
});

app.use(function(err, req, res, next) {
	if (err.code=="LIMIT_FILE_SIZE"){
		console.error(err);
		console.error(err.stack);
		res.status(500).end('File too large!');
		return;
	}
  res.status(500).end('Error with file upload, try again!');
  next(err);
});
