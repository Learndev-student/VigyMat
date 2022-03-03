// Variable declarations

var worker = new Worker('/VigyMat/js/calc_web_worker.js', { type:'module' });
let app = document.getElementById('app') ;
let module;

function Message( type , content )
{
        return {
                'type' : type,
                'content' : content
        };
}

function workersf( str )
{
	switch (str){
		case 'calculate': let eles = documents.getElementsByClassName('input');
			let inputs = [];
			for(let i = 0; i<eles.length ; i++)
			{
				inputs[i] = {'val': eles[i].value , 'io':eles[i].dataset.io};
			}
			Message('calculate',inputs);
			break;
	}
}

function render ( arr )
{
	arr.forEach( i => 
		{
			let box = document.createElement('div') ;
			let head = document.createElement('h3') ;
			let content = document.createElement('div') ;
			box.className = 'box' ;
			head.className = 'heading' ;
			content.className = 'content' ;
			head.innerHTML = i[0] ;
			content.innerHTML = i[1] ;
			box.appendChild(head) ;
			box.appendChild(content) ;
			app.appendChild(box) ;
		} ) ;
}

//Dynamic imports
async function d_import ( url )
{
	let str = url.replace("https://learndev-student.github.io/VigyMat",'') ;
	if (str == '/') str = '/index' ;
	import(`https://learndev-student.github.io/VigyMat/js${str}.js`).then( m =>
		{
			module = m ;
			render( module.html ) ;
			let f_str = [];
			module.functions.forEach( i =>
				{
					f_str.append( `return ${i.toString()} ;`);
				});
			Message( 'functions' , f_str );
			Message( 'list' , module.list );
		}) ;
}

// Dynamic links
function d_links ()
{
	let links = document.getElementByClassName('d_links') ;
	for ( let i = 0 ; i < links.length ; i++ )
	{
		links[i].onclick = ( event ) => {
                        worker.postMessage( Message('import' , links[i].href ) ) ;
                        event.preventDefault() ;
		}
	}
}

//Reloading
function reload()
{
	//Reload reloads the worker for new script
	let url = window.location.href ;
	history.pushState({} , '' , url) ;
	d_import( url ) ;
}

function show_err( err )
{
	let p = document.createElement('p');
	p.className = 'error' ;
	p.innerHTML = `${err.name} : ${err.message}` ;
	app.appendChild(p) ;
}
window.onpopstate = () => reload() ;
reload() ;
worker.onmessage = ( m ) =>
{
	switch (m.data.type)
	{
		case 'values' : let eles = document.getElementByClassName('input');
			for( let i = 0; i<values.length ; i++)
			{
				eles[i].value = m.data.content[i];
			}
				break;
		case 'error' : show_err( m.data.content ) ;
				break;
	}
}
