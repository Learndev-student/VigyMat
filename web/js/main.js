//Creating Worker
var worker = new Worker('/VigyMat/web/js/calc_web_worker.js');

//App container element
let app = document.getElementById('app');

//Variable for Module-objects
var module;

//A message Prototype
function Message(type,content){
        worker.postMessage( {
                'type' : type ,
                'content' : content
        });
}

//Rendering HTML
function render(arr){
	app.innerHTML = '';
	Object.keys(arr).forEach( i => {
			let box = document.createElement( 'div' );
			let head = document.createElement( 'h3' );
			let content = document.createElement( 'div' );
			box.className = 'box';
			head.className = 'heading';
			content.className = 'content';
			head.innerHTML = i;
			content.innerHTML = arr[i];
			box.appendChild(head);
			box.appendChild(content);
			app.appendChild(box);
		});
	d_links();
}

//Dynamic imports
async function d_import(url){
	let str = url.replace("https://learndev-student.github.io/VigyMat",'');
	if(str == '/') str = '/index';
	import(`/VigyMat/web/js${str}.js`).then( m => {
			module = m;
			render(module.html);
			let f_str = [];
		console.log(module);
			module.Functions_obj0.calc_functions.forEach( i =>{
					let s = i.toString();
					f_str.push(`return (${s}).call('obj',inputs) ;`);
				});
			Message('functions', f_str);
			Message('list',module.list);
		});
}

// Dynamic links
function d_links(){
	let links = document.getElementsByClassName('d_links');
	for (let i = 0;i < links.length; i++){
		links[i].onclick = (event) => {
			event.preventDefault();
                        d_import(links[i].href);
			history.pushState({} ,'',links[i].href);
		}
	}
}

//Reloading
function reload(){
	let url = window.location.href;
	d_import(url);
}

function show_err(err){
	let p = document.createElement('p');
	p.className = 'error';
	p.innerHTML = `${ err.name } : ${ err.message }`;
	app.appendChild(p);
}
window.onpopstate = () => reload();
reload();
worker.onerror = (err)=>{
	console.log(`Error occured`,err);
};
worker.onmessage = (m) =>{
	console.log(`Message came :`,m.data);
	let type = m.data.type;
	let content = m.data.content;
	switch (type){
		case 'values' :
			document.getElementById(content['id']).output(content['values']);
			break;
		case 'error' : 
			show_err( content );
			break;
	}
}
