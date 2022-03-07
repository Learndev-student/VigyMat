const html =
	[
		[ 
			'About' ,
			`<p>MODULE : Geometry/cube </br>ID : 1</p>
			<p>This module is intented to provide calculations related to the geometry of a Cube</p>`
		] ,
		[ 
			'Calculate' ,
			`<div id ='input1'>
				<input type='number' class='input' placeholder='side' data-io='output'>
				<input type='number' class='input' placeholder='volume' data-io='output'>
				<input type='number' class='input' placeholder='total area' data-io='output'>
				<input type='number' class='input' placeholder='2d diagonal' data-io='output'>
				<input type='number' class='input' placeholder='3d diagonal' data-io='output'>
				</br>
				<button>Clear</button>
				<button onclick="workersf('calculate')" id='submit'>Calculate</button>
			</div>`
		]
	] ;
// ORDER = [ length , volume , total_area , 2d_diagonal , 3d_diagonal ]
	
function f0 (inputs)
{
	//inputs = [ length ]
	//outputs = [ volume , total_area , 2d_diagonal , 3d_diagonal ]
	let l = parseFloat(inputs[0]) ;
	return [
		l**3 ,
		6*l*l ,
		l*(2**(1/2)) ,
		l*(3**(1/2))
	];
}

function f1 (inputs)
{
	//inputs = [ volume ]
	//outputs = [ length , total_area , 2d_diagonal , 3d_diagonal ]
	let l = (parseFloat(inputs[0 ]))**(1/3) ;
	return functions[ 0 ]( [ l ] ) ;
}

function f2 (inputs)
{
	//inputs = [ total_area ]
	//outputs = [ length , volume , 2d_diagonal , 3d_diagonal ]
	let tsa = parseFloat(inputs[0]) ;
	let l = (tsa/6)**(1/2)  ;
	return functions[ 0 ]( [ l ] ) ;
}

function f3 (inputs)
{
	//inputs = [ 2d_diagonal ]
	//outputs = [ length , volume , total_area , 3d_diagonal ]
	let l = parseFloat(inputs[0])/(2**(1/2)) ;
	return functions[ 0 ]( [ l ] ) ;
}

function f4 (inputs)
{
	//inputs = [ 3d_diagonal ]
	//outputs = [ length , volume , total_area , 2d_diagonal ]
	let l = parseFloat(inputs[0])/(3**(1/2)) ;
	return functions[ 0 ]( [ l ] ) ;
}

const list = [
	[1,0,0,0,0] ,
	[0,1,0,0,0] ,
	[0,0,1,0,0] ,
	[0,0,0,1,0] ,
	[0,0,0,0,1]
];
let functions = [ f0 , f1 ,f2 , f3 , f4 ] ;
export { html , functions , list }
