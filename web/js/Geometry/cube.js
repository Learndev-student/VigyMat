import {Functions_obj} from '/VigyMat/web/js/additionals/basic_functions.js';
const html =
	{
			'About' :
			`<p>MODULE : Geometry/sphere </br>ID : 2</p>
			<p>This module is intented to provide calculations related to the geometry of a Sphere</p>` ,
		'Calculate' :
			`<input-block>
				<input-ele type='text' name='side'></input-ele>
				<input-ele type='text' name='volume'></input-ele>
				<input-ele type='text' name='total_area'></input-ele>
				<input-ele type='text' name='two_d_diagonal'></input-ele>
				<input-ele type='text' name='three_d_diagonal'></input-ele>
			</input-block>`
} ;
const ORDER = [ 'side','volume','total_area','two_d_diagonal','three_d_diagonal'];
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
let calc_functions = [ f0 , f1 ,f2 , f3 , f4 ] ;
let Functions_obj0 = new Functions_obj(calc_functions);
export { html , Functions_obj0 , list , ORDER}
