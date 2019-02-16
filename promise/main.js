const httpGet = url =>{
	return new Promise((resolve,reject)=>{
    let xhr = new XMLHttpRequest();
    xhr.open('GET',url,true);
		//preLoad();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState !== 4) return;
      if(xhr.status !== 200){
      	reject(new Error(`Error ${xhr.status} ${xhr.statusText}`))
      } else {
      	resolve(JSON.parse(xhr.responseText));
      }
    }
    xhr.send() 
  })
}
	
httpGet('./db.json')
	.then(r=>{
		return new Promise((resolve)=>{
			let cont = document.querySelector('.content');
			let str = '';
			for(let i = 0;i < 3;i++){
				str += `<div class='name_pers'>`;
				str += `<p class='name_perst'>${r[i].pers.name}</p>`;
				str += `<img src='${r[i].pers.post_name}'>`;
				str += '</div>';
			}
			cont.innerHTML = str;
			resolve(r);
		})
	})
	.then(r=>{
		let count = 1;
		let cont = document.querySelector('.content');
		cont.addEventListener('scroll', loadData); 
		function loadData(e){
		   e.preventDefault();
		   let topPage = cont.clientHeight; // высота видимой области блока
  		   let scrollTop = cont.scrollTop; // текущая позиция скролла
		   let scrollHeight = Math.max(cont.scrollHeight); // высота блока с прокруткой
		   let loadHeight = topPage + (topPage/2); // линия подгрузки
		   let str = '';
		   let start = count > 0 ? 3 * count : count;
		   let end = start + 3;
		   if(r.length > 0){
			   	if(scrollTop >= (scrollHeight - loadHeight)) {
					for(let i = start;i < end;i++){
						if(start < r.length){
							str += `<div class='name_pers'>`;
							str += `<p class='name_perst'>${r[i].pers.name}</p>`;
							str += `<img src='${r[i].pers.post_name}'>`;
							str += '</div>';
						}
					}
					cont.innerHTML += str;
					count++;
				}
			   if(start >= r.length){
				  cont.removeEventListener('scroll',loadData);
				  cont.innerHTML += `<p class='lost'>В базе закончились элементы</p>`;
			   }
		   }
		}
	})
	.catch(error=>{console.log(error.message)})

/*const preLoad = ()=>{
	let pre = document.createElement('div');
	pre.setAttribute('class', 'pre');
	document.body.firstElementChild.appendChild(pre);
}*/