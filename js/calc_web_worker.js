//Variable for Module's functions
var functions = [] ;
var id ;
//Array of input values
var inputs = [];

//A container for checking the correct order of input and output elements
var list;

//Message prototype
function Message( type , content )
{
	postMessage({
		'type' : type ,
		'content' : content
	}) ;
}

//To post an error
function postErr( name , message )
{
	Message( 'error' , {
		'name' : name ,
		'message' : message
	} ) ;
}

//Checks if two arrays are equal or not
function arraysEqual( a, b )
{
	if ( a === b )
		return true ;
	if ( a == null || b == null )
		return false;
	if ( a.length !== b.length ) 
		return false ;
	for ( var i = 0 ; i < a.length ; ++i ) {
		if ( a[ i ] !== b[ i ] )
			return false ;
	  }
	return true ;
}

//The calculate function to initialise the module functions according to the order of input and output elements
function calculate( inputs )
{
	Message( `console` , `initiating calculate` ) ;
	let a = [] ;
	let ans = [] ;
	let in_arr = [] ;
	inputs.forEach( i => {
		if( i[ 'io' ] == "input" )
		{
			a.push( 1 ) ;
			in_arr.push( i[ 'value' ] ) ;
		}
		else
		{
			a.push( 0 ) ;
		}
	}) ;
	Message( `console` , [ a  ,inputs, in_arr ] ) ;
	for( let n=0 ; n<list.length ; n++ )
	{
		if ( arraysEqual( a , list[ n ] ) )
		{
			ans = functions[ n ]( in_arr ) ;
			Message( 'values' , {
				'id' : id ,
				'values' : ans
			});
			break ;
		}
	}
}

onmessage = ( Obj ) =>
{
	try {
		switch ( Obj.data[ 'type' ] )
		{
			case 'functions' : 
				Obj.data[ 'content' ].forEach( str =>
				{
						functions.push( new Function( 'inputs' , str ) ) ;
			}) ;
				break ;
			case 'list' :
				list = Obj.data[ 'content' ] ;
				break ;
			case 'calculate' :
				id = Obj.data['content']['id'] ;
				calculate( Obj.data[ 'content' ]['values'] ) ;
				break ;
			default : 
				postErr( 'Invalid message' , "" ) ;
		}
	}catch(err)
	{
		postErr( err.name , err.message ) ;
	}
} ;
