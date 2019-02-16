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