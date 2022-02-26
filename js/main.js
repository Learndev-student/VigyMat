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

function render ( arr )
{
	arr.forEach( i => 
		{
			let box = document.createElement('div') ;
			let head = document.createElement('h3') ;
			let content = document.createElement('div');
			box.className = 'box';
			head.className = 'heading' ;
			content.className = 'content' ;
			head.innerHTML = i[0] ;
			content.innerHTML = i[1] ;
			box.appendChild(head) ;
			box.appendChild(content) ;
			app.appendChild(box) ;
		} ) ;
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
	let url = window.location.href ;
	worker.postMessage( Message('import' , url) );
	history.pushState({} , '' , url) ;
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
		case 'html_data' : render( m.data.content ) ;
				break;
		case 'error' : show_err( m.data.content ) ;
				break;
	}
}
