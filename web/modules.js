const data={
        "languages":1,
        "js":{
        "length":1,                                                                                             "titles":["Test Module"],                                                                               "urls":["test"]
        },
        "c":{
                "length":0
        }
};
const modules=data['js'];
var obj;
var functions;
var inp_arr=[];
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
	import(`https://learndev-student.github.io/VigyMat/js/${str}.js`).then((module) => {
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
function get(arr){
	let n;
	for(n=0;n<modules.length;n++){
		if(modules.urls[n]==arr[5]){
			document.getElementsByTagName("title")[0].text=modules.titles[n];
			load_module(arr[5]);
			break;
		}
	}
	if(n==modules.length){
		module_not_found();
	}
}

export {get};
