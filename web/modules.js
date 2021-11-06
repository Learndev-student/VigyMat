const data={
        "languages":1,
        "js":{
        	"length":1,                                           "titles":["Test Module"],                             "urls":["test"]
        }
};
const modules=data['js'];
var functions;
var inp_arr=[];
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
function reset(Obj){
	let obj=Obj.content[Obj.calc];
	let container= document.createElement("div");
	container.innerHTML="";
	let i;
	let ele_arr=[];
	for(i=0;i<obj.length;i++){
		let input=document.createElement("input");
		inp_arr[i]=input;
		input.placeholder=obj.placeholders[i];
		input.type=obj.type[i];
		input.name=i;
		input.className="inputs";
		ele_arr.push(input);
	}
	let submit=document.createElement("input");
	submit.type="submit";
	submit.value="SUBMIT";
	submit.className="submit";
	submit.onclick=()=>calculate();
	ele_arr.push(submit);
	Obj.content[Obj.calc]=ele_arr;
	return Obj;
}
async function load_module(str){
	let Obj;
	let module= await import(`https://learndev-student.github.io/VigyMat/js/${str}.js`);
	Obj=module.Obj;
	console.log(Obj, "loadmodule()1");
	functions=module.functions;
	Obj=reset(Obj);
	console.log(Obj,`${str} module loaded`);
	return Obj;
}
function module_not_found(){
	let url_arr=window.location.href.split('/');
	let str=`${url_arr[4]}/${url_arr[5]}`;
	let Obj={
		description:"404",
		headings:["404!"],
		content:[`<h3>Sorry!,</h3><p>The page ${str} not found.</p>`]
	};
	return Obj;
}
async function get(arr){
	let n;
	let Obj;
	for(n=0;n<modules.length;n++){
		if(modules.urls[n]==arr[5]){
			document.getElementsByTagName("title")[0].textContent=modules.titles[n];
			Obj=await load_module(arr[5]);
			break;
		}
	}
	if(n==modules.length){
		Obj=module_not_found();
	}
	return Obj;
}

export {get};
