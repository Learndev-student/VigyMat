function say_hello()
{
	prompt("Hello!") ;
}

let html =
	[
		[ 'About' , `<p onclick="f['say_hello']()">Hello world</p>`],
		[ 'something' , "hi"]
	] ;
let f = { 'say_hello' : say_hello } ;
export { html , f }
