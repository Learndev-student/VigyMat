//Const data for the list of modules
import { data } from "https://learndev-student.github.io/VigyMat/data.js";

//Selecting js modules for web pages
const modules = data['js'];
//A container for module functins
var functions;
//A container for input/output elements
var inp_arr = [];
//A container for checking the correct order of input and output elements
var list;

//Checks if twomarrays are equal or not
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
	inp_arr.forEach( i => {
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
			inp_arr.forEach( i => {
				if( m != n ) i.value = ans[m];
				m++;
			});
			break;
		}
	}
}

//Reseting the page's content
function reset( Obj ) {
	let obj = Obj.content[ Obj.calc ];
	let container = document.createElement("div");
	container.innerHTML="";
	let i;
	let ele_arr = [];
	console.log(obj);
	if( Obj.loaded ) {
		return Obj;
	} else {
		for( i=0 ; i<obj.placeholders.length ; i++ ) {
			let input = document.createElement("input");
			inp_arr[i] = input;
			input.placeholder = obj.placeholders[i];
			input.type = obj.type[i];
			input.name = i;
			input.className = "inputs";
			input.dataset.io = "output";
			input.onclick = (i)=> {
				i.srcElement.dataset.io = "input";
			};
			input.oninput = calculate;
			input.onchange = calculate;
			ele_arr.push(input);
		}
		let clear = document.createElement("input");
		clear.type = "button";
		clear.value = "Clear";
		clear.id = "clear";
		clear.onclick = ()=> {
			inp_arr.forEach( i => {
				i.value = "";
				i.dataset.io = "output";
			});
		};
		ele_arr.push(clear);
		Obj.content[Obj.calc] = ele_arr;
		Obj.loaded = true;
		return Obj;
	}
}

//The main function which imports modules dynamically
async function load_module( str ) {
	let Obj;
	inp_arr = [];
        functions = [];
	let module = await import(`https://learndev-student.github.io/VigyMat/web/js${str}.js`);
	Obj = module.Obj;
	list = module.list;
	functions = module.functions;
	Obj = reset(Obj);
	console.log(`${str} module loaded`);
	return Obj;
}

//What if the module is not present? Here the thing to do
async function module_not_found() {
	let url_arr = window.location.href.split('/');
	let str = `${url_arr[4]}/${url_arr[5]}`;
	let Obj = await import("https://la=earndev-student.github.io/VigyMat/web/main/404.js");
	return Obj;
}

//Get the link of the module which has to be imported dynamically
async function get( arr ) {
	let n;
	let Obj;
	let a = "";
	arr.forEach( i => {
		if( arr.indexOf(i) >= 5 ) a += `/`+i;
		console.log(a);
	});
	console.log(modules.urls);
	for( n=0 ; n < modules.length ; n++ ) {
		modules.content.sub.forE
		if( url == a ){
			Obj = await load_module(a);
			break;
		}
	}
	if( n == modules.length ) {
		Obj = module_not_found();
	}
	return Obj;
}

//Export get() so that others can use it
export { get };
