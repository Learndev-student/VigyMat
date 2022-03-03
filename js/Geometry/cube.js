let html =
	[
		[ 'About' , `<p>Hello world</p>`],
		[ 'Calculate Cube' , `<input type='num' class='input'><button onclick='workersf('calculate')' id='submit'>Calculate</button>`]
	] ;
function f1 (inputs)
{
	return math.pow(inputs[0],3);
}
const list = [
	[1,0],
	[0,1]
];
let functions = [f1];
export { html , functions ,list }
