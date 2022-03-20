import {Functions_obj} from '/web/js/additionals/basic_functions.js';
const html={
	'About':`Sample module for Developers`,
	'Calculate':`
		<input-block>
			n<input-ele></input-ele>
			n³<input-ele></input-ele>
		</input-block>`
};

//ORDER [number,cubed_number]

function f0(arr){
	let n = parseFloat(arr[0]);
	return [n,n*n*n];
}
function f1(arr){
	let n=parseFloat(arr[0])**(1/3);
	return functions[0]([n]);
}
const list=[
	[1,0],
	[0,1]
];
let Functions_obj0= new Functions_obj([f0,f1]);
export {html, Functions_obj0 , list}
