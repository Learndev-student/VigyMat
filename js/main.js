//Creating Worker
var worker = new Worker('/VigyMat/js/calc_web_worker.js');

//App container element
let app = document.getElementById('app');

//Variable for Module-objects
let module;

//A message Prototype
function Message(type,content){
        worker.postMessage( {
                'type' : type ,
                'content' : content
        });
}

//Rendering HTML
function render(arr){
	arr.forEach( i => {
			let box = document.createElement( 'div' );
			let head = document.createElement( 'h3' );
			let content = document.createElement( 'div' );
			box.className = 'box';
			head.className = 'heading';
			content.className = 'content';
			head.innerHTML = i[0];
			content.innerHTML = i[1];
			box.appendChild(head);
			box.appendChild(content);
			app.appendChild(box):
		});
}

//Dynamic imports
async function d_import(url){
	let str = url.replace("https://learndev-student.github.io/VigyMat",'');
	if(str == '/') str = '/index';
	import(`https://learndev-student.github.io/VigyMat/js${str}.js`).then( m => {
			module = m;
			render(module.html);
			let f_str = [];
			module.functions.forEach( i =>{
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
                        d_import(url);
			history.pushState({} ,'',url);
                        event.preventDefault() ;
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
