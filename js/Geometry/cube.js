let html =
	[
		[ 
			'About' ,
			`<p>Hello world</p>`
		] ,
		[ 
			'Calculate Cube' ,
			`<input type='num' class='input' placeholder='3' data-io='input'>
			<input type='num' class='input' placeholder='27' data-io='output'>
			<button onclick="workersf('calculate')" id='submit'>Calculate</button>`
		]
	] ;
function f1 (inputs)
{
	return [
		float(inputs[0]) ,
		float(inputs[0])**(3)
	];
}
function f2 (inputs)
{
	return [
		float(inputs[0])**(1/3) ,
		float(inputs[0])
	];
}
const list = [
	[1,0],
	[0,1]
];
let functions = [f1,f2];
export { html , functions ,list }
