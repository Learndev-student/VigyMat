const data={
        "languages":1,
        "js":{
        	"length":2,
		"titles":["Test Module","Circle"],
		"urls":["test","circle"]
        }
};
const modules=data['js'];
var functions;
var inp_arr=[];
var list;
//creating the selection function so that the user would be able to select the required outputs and inputs
function calculate(){
	//first to re-create the algorithm so that we have a more open and wide use with minimal code
	////needs to be removed
	let a=[];
	let ans;
	inp_arr.forEach((i)=>{
		if(i!=""){
			a.push(1);
		}else{
			a.push(0);
		}
	});
	if(a in list){
		ans=functions[list.indexof(a)](inp_arr);
	}
	let n=0;
	inp_arr.forEach((i)=>i.value=ans[n++]);
}
function reset(Obj){
	let obj=Obj.content[Obj.calc];
	let container= document.createElement("div");
	container.innerHTML="";
	let i;
	let ele_arr=[];
	console.log(obj);
	if(Obj.loaded){
		return Obj;
	}else{
	for(i=0;i<obj.length;i++){
		let input=document.createElement("input");
		inp_arr[i]=input;
		input.placeholder=obj.placeholders[i];
		input.type=obj.type[i];
		input.name=i;
		input.className="inputs";
		input.onchange=()=calculate();
		ele_arr.push(input);
	}
	//let submit=document.createElement("input");
	//submit.type="submit";
	//submit.value="SUBMIT";
	//submit.className="submit";
	//submit.onclick=()=>calculate();
	//ele_arr.push(submit);
	Obj.content[Obj.calc]=ele_arr;
	Obj.loaded=true;
	return Obj;
	}
}
async function load_module(str){
	let Obj;
	inp_arr=[];
        functions=[];
	let module= await import(`https://learndev-student.github.io/VigyMat/js/${str}.js`);
	Obj=module.Obj;
	list=module.list;
	functions=module.functions;
	Obj=reset(Obj);
	console.log(`${str} module loaded`);
	return Obj;
}
function module_not_found(){
	let url_arr=window.location.href.split('/');
	let str=`${url_arr[4]}/${url_arr[5]}`;
	let Obj={
		description:"404",
		headings:["404!"],
		content:[`<h3>Sorry! ,</h3><p>The page ${str} not found. You may check the <a class="d_link" href="https://learndev-student.github.io/VigyMat">Homepage</a>`]
	};
	return Obj;
}
async function get(arr){
	let n;
	let Obj;
	for(n=0;n<modules.length;n++){
		if(modules.urls[n]==arr[5]){
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
