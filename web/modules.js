const data={
        "languages":1,
        "js":{
        	"length":3,
		"titles":["Test Module","Circle","Cube"],
		"urls":["Misc/test","Misc/circle","Misc/cube"]
        }
};
const modules=data['js'];
var functions;
var inp_arr=[];
var list;
function arraysEqual(a, b) {
	  if (a === b) return true;
	  if (a == null || b == null) return false;
	  if (a.length !== b.length) return false;
	  for (var i = 0; i < a.length; ++i) {
             if (a[i] !== b[i]) return false;
	  }         return true;
}
function calculate(){
	let a=[];
	let ans=[];
	inp_arr.forEach((i)=>{
		if(i.dataset.io=="input"){
			a.push(1);
		}else{
			a.push(0);
		}
	});
	for(let n=0;n<list.length;n++){
		if(arraysEqual(a,list[n])){
			ans=functions[n](inp_arr);
			let m=0;
			inp_arr.forEach((i)=>{
				if(m!=n) i.value=ans[m];
				m++;
			});
			break;
		}
	}
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
		for(i=0;i<obj.placeholders.length;i++){
			let input=document.createElement("input");
			inp_arr[i]=input;
			input.placeholder=obj.placeholders[i];
			input.type=obj.type[i];
			input.name=i;
			input.className="inputs";
			input.dataset.io="output";
			input.onclick=(i)=>{
				i.srcElement.dataset.io="input";
			}
			input.oninput=calculate;
			input.onchange=calculate;
			ele_arr.push(input);
		}
		let clear=document.createElement("input");
		clear.type="button";
		clear.value="Clear";
		clear.id="clear";
		clear.onclick=()=>{
			inp_arr.forEach((i)=>{
				i.value="";
				i.dataset.io="output";
			});
		};
		ele_arr.push(clear);
		Obj.content[Obj.calc]=ele_arr;
		Obj.loaded=true;
		return Obj;
	}
}
async function load_module(str){
	let Obj;
	inp_arr=[];
        functions=[];
	let module= await import(`https://learndev-student.github.io/VigyMat/web/js/${str}.js`);
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
	let a="";
	arr.forEach( i => if(arr.indexOf(i)>=5) a+=i);
	for(n=0;n<modules.length;n++){
		if(modules.urls[n]==a){
			Obj=await load_module(a);
			break;
		}
	}
	if(n==modules.length){
		Obj=module_not_found();
	}
	return Obj;
}

export {get};
