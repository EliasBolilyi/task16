/*
*
* 1. На основе событий создать свой логер(logger). Который будет регистрировать пользователя со временем посещения и выводит эти данные в консоль. Также можно добавить информацию типа (такой то пользователь вошёл и вышел), набросать событий типа logIn, logout, someAction…. Код произвольный(абстрактный), главное использовать события класса EventEmitter.
*
*/

var Event = require("events").EventEmitter;
//добавил пакет для отображения времени
var date = require('date-and-time');

var now = new Date();
var event = new Event();


event.on('eventLogIn', function(obj, _login, _password) {
	//сверяем логин и пароль с данными условного юзера
	if(_login === obj.name &&  _password === obj.password ) {
		console.log('you are succesfully logged in at' + ' '+ date.format(now, 'HH:mm:ss'));
	}
  	else {
  		console.log('something has gone wrong');
  	}
});


event.on('eventLogOut', function() {
  	console.log('you are succesfully logged out');
});




var user = {
	id: 1134,
	name: "Adam",
	password: 1234
};

//передаем какого-то юзера, а также логин и пароль который мы сравним с логином и паролем юзера
event.emit('eventLogIn', user, 'Etan', 23232);
event.emit('eventLogIn', user, 'Adam', 1234);
//event.emit('eventLogOut');