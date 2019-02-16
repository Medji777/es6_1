const postFetch = (url, bodyRequest)=>{

    fetch(url,{
        method: 'post',
        headers: {
            'Accept': 'text/plain, */*',
            'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: bodyRequest
    })
        .then(data=>{console.log(data.text(),data.status);return data.text()})
        .then(data=>{
            let stat = document.querySelector('.result');
            (data == 1) ? (stat.innerHTML = 'Форма отправлена!') : stat.innerHTML = data;
        })
        .catch(error=>{console.log(error.message)});
};

let objBody = {
    name: document.forms['form'].form_name,
    phone: document.forms['form'].form_phone,
    email: document.forms['form'].form_email,
    message: document.forms['form'].form_mas,
    url: '../php/action.php'
};
const onSend = (e)=>{
    e.preventDefault();
    let params = `name=${objBody.name.value}&phone=${objBody.phone.value}&mail=${objBody.email.value}&message=${objBody.message.value}`;
    console.log(`name=${objBody.name.value}&phone=${objBody.phone.value}&mail=${objBody.email.value}&message=${objBody.message.value}`);
    postFetch(`${objBody.url}`,params);
};

document.querySelector('#form').addEventListener('submit', onSend);