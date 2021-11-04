import data from "/list.json" assert { type: "json" };
const modules=data['js'];
var url_arr=(window.location.href).split("/");
var obj;
var functions;
var inp_arr=[];
var title=document.getElemenetsByTagName("title")[0];
var container=document.getElementById("content");
function calculate(i){
	let inputs=[];
	let n=0;
	let m=-1;
	inp_arr.forEach((i)=>{
		if(i.value!=""){ inputs[n++]=i.value;
		}else{ m=i.name;}
	});
	if(m!=-1){inp_arr[m].value=functions[m](inputs);
	}
}
//function function_check(){
//	inp_arr.forEach((i)=>{
//		if(i==""){ return i.name };
//	});
//
function reset(){
	container.innerHTML="";
	let i;
	for(i=0;i<obj.length;i++){
		let input=document.createElement("input");
		inp_arr[i]=input;
		input.placeholder=obj.placeholders[i];
		input.type=obj.type[i];
		input.name=i;
		input["class"]="inputs";
		container.appendChild(input);
	}
	let submit=document.createElement("input");
	submit.type="submit";
	submit.value="SUBMIT";
	submit['class']="submit";
	submit.onclick=()=>calculate();
	container.appendChild(submit);
}
async function load_module(str){
	import(`/js/${str}.js`).then((module) => {
	  obj=module.obj;
	  functions=module.functions;
	  reset();
	console.log(str,"module loaded");
  });
}
function module_not_found(){
	let str=`${url_arr[4]}/${url_arr[5]}`;
	container.innerHTML=`<h3>Sorry!,</h3><p>The page ${str} not found.</p>`;
}
function get(str){
	let n;
	for(n=0;n<modules.length;n++){
		if(modules.urls[n]==url_arr[5]){
			title.text=modules.titles[n];
			load_module(url_arr[5]);
			break;
		}
	}
	if(n==modules.length){
		module_not_found();
	}
}

switch (url_arr[4]){
	case "modules" : get(url_arr[4]);
		break;
	default : main_page();
}
