const html =
	[
		[ 
			'About' ,
			`<p>MODULE : Geometry/cube </br>ID : 1</p>
			<p>This module is intented to provide calculations related to the geometry of a Cube</p>`
		] ,
		[ 
			'Calculate' ,
			`<input-block>
				side<input-ele type='number' placeholder='side'></input-ele>
				volume<input-ele type='number' placeholder='volume'></input-ele>
				TSA<input-ele type='number' placeholder='total area'></input-ele>
				2d diagonal<input-ele type='number' placeholder='2d diagonal'></input-ele>
				3d diagonal<input-ele type='number' placeholder='3d diagonal'></input-ele>
				<button onclick="this.parentElement.clear()">Clear</button>
				</input-block>`
		]
	] ;
// ORDER = [ length , volume , total_area , 2d_diagonal , 3d_diagonal ]
	
function f0 (inputs)
{
	//inputs = [ length ]
	//outputs = [ volume , total_area , 2d_diagonal , 3d_diagonal ]
	let l = parseFloat(inputs[0]) ;
	return [
		l,
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
