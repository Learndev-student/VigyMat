//Variable declarations
var functions;
//A container for input/output elements
var inputs = [];

//A container for checking the correct order of input and output elements
var list;

function Message( type , content )
{
	return {
		'type' : type,
		'content' : content
	};
}

//To post an error
function postErr( name , message )
{
	postMessage( Message( 'error' , {
		'name' : name,
		'message' : message
	} ) );
}

//Checks if two arrays are equal or not
function arraysEqual( a, b ) {
	if ( a === b ) return true;
	if ( a == null || b == null ) return false;
	if ( a.length !== b.length ) return false;
	for ( var i = 0 ; i < a.length ; ++i ) {
		if ( a[i] !== b[i] ) return false;
	  }         return true;
}

//The calculate function to initialise the module functions according to the order of input and output elements
function calculate(){
	let a = [];
	let ans = [];
	inputs.forEach( i => {
		if( i.dataset.io == "input" ) {
			a.push(1);
		} else {
			a.push(0);
		}
	});
	for( let n=0 ; n<list.length ; n++ ) {
		if( arraysEqual(a,list[n]) ) {
			ans = functions[n](inp_arr);
			let m = 0;
			inputs.forEach( i => {
				if( m != n ) i.value = ans[m];
				m++;
			});
			break;
		}
	}
}

onmessage = ( Obj ) =>
{
	try {
		switch (Obj.data['type'])
		{
				//TO EDIT
			case 'functions' : Obj.data['content']['functions'].forEach( str => {
						functions.append(new Function('inputs' , str));
			});
					break;
			case 'list' : list = Obj.data['content']['list'];
					break;
			case 'calculate' : calculate( Obj.data['content'] );
					break;
			default : postErr('Invalid message' , "");
		}
	}catch(err)
	{
		postErr(err.name,err.message);
	}
};
