var nodemon = require('nodemon');

nodemon({
  	script: 'hometask3.js',
  	ext: 'js json'
});

nodemon.on('start', function () {
  	console.log('App has started');
}).on('quit', function () {
  	console.log('App has quit');
  	process.exit();
});