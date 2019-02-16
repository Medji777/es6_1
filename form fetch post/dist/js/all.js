"use strict";

var postFetch = function postFetch(url, bodyRequest) {
  fetch(url, {
    method: 'post',
    headers: {
      'Accept': 'text/plain, */*',
      'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    body: bodyRequest
  }).then(function (data) {
    console.log(data.text(), data.status);
    return data.text();
  }).then(function (data) {
    var stat = document.querySelector('.result');
    data == 1 ? stat.innerHTML = 'Форма отправлена!' : stat.innerHTML = data;
  }).catch(function (error) {
    console.log(error.message);
  });
};

var objBody = {
  name: document.forms['form'].form_name,
  phone: document.forms['form'].form_phone,
  email: document.forms['form'].form_email,
  message: document.forms['form'].form_mas,
  url: '../php/action.php'
};

var onSend = function onSend(e) {
  e.preventDefault();
  var params = "name=".concat(objBody.name.value, "&phone=").concat(objBody.phone.value, "&mail=").concat(objBody.email.value, "&message=").concat(objBody.message.value);
  console.log("name=".concat(objBody.name.value, "&phone=").concat(objBody.phone.value, "&mail=").concat(objBody.email.value, "&message=").concat(objBody.message.value));
  postFetch("".concat(objBody.url), params);
};

document.querySelector('#form').addEventListener('submit', onSend);
/*document.querySelector('#form').addEventListener('submit', postLoad);
function postLoad(e){
	e.preventDefault();
	
	let name = document.forms['form'].form_name;
	let phone = document.forms['form'].form_phone;
	let email = document.forms['form'].form_email;
	let message = document.forms['form'].form_mas;
	postSend('action.php',`name=${name.value}&phone=${phone.value}&mail=${email.value}&message=${message.value}`);
}
function postSend(url,params){
	
	let xhr = new XMLHttpRequest();
	xhr.open('POST',url,true);
	xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function(){
		
		if(xhr.readyState !== 4) return;
		if(xhr.status !== 200){
			console.log('error');
		} else {
			console.log(xhr.responseText);
			console.log(xhr.getAllResponseHeaders());
			document.querySelector('.result').innerHTML = xhr.responseText;
		}
			
	}
	xhr.send(params);
}*/

/*application/json; charset=utf-8*/

/*const postSendPromise = (url,params) =>{
	return new Promise((resolve,reject)=>{
		let xhr = new XMLHttpRequest();
		xhr.open('POST',url,true);
		xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
		xhr.onreadystatechange = () => {
			if(xhr.readyState !== 4) return;
			if(xhr.status !== 200){
				reject(new Error(`error: ${xhr.status} ${xhr.statusText}`))
			}else {
				console.log(xhr.getAllResponseHeaders());
				resolve(xhr.responseText)
			}
		};
		xhr.send(params);
	})
};

const onSend = (e) =>{
	e.preventDefault();
	let name = document.forms['form'].form_name,
		phone = document.forms['form'].form_phone,
		email = document.forms['form'].form_email,
		message = document.forms['form'].form_mas;
	postSendPromise('../php/action.php',`name=${name.value}&phone=${phone.value}&mail=${email.value}&message=${message.value}`)
		.then((data)=>{console.log(data);return data})
		.then(data=>{
			let stat = document.querySelector('.result');
			(data == 1) ? (stat.innerHTML = 'Форма отправлена!') : stat.innerHTML = data;
		})
		.catch(error=>{console.log(error.message)})
};
document.querySelector('#form').addEventListener('submit', onSend);*/
"use strict";