import {get} from "https://learndev-student.github.io/VigyMat/web/modules.js";
function render_content(obj){
	let app=document.getElementById("app");
	document.getElementsByTagName("title")[0].textContent=obj.title;
	app.innerHTML="";
	let n=0;
	obj["headings"].forEach((i)=>{
		let box=document.createElement("div");
		box.className="box";
		let heading=document.createElement("h2");
		heading.className="heading";
		heading.textContent=i;
		box.appendChild(heading);
		if(typeof obj["content"][n]=="string"){
			box.innerHTML+=obj["content"][n++];
		}else{
			obj["content"][n++].forEach((e)=>box.appendChild(e));
		}
		app.appendChild(box);
	});
	d_links();
	let l=document.getElementsByClassName("location")[0];
	let x;
	if(window.location.href.split('/')[5]==undefined){ x="";}else{x=window.location.href.split('/')[5];}
	l.textContent=`${window.location.href.split('/')[4]}/${x}`;
}
async function load_page(){
var url_arr=(window.location.href).split('/');
switch (url_arr[4]){
	case "modules": 
		get(url_arr).then((o)=>render_content(o));
		break;
	case "":
		{let {Obj}=await import("https://learndev-student.github.io/VigyMat/web/main/home.js");
		render_content(Obj);}
		break;
	default :
		{let {Obj}= await import("https://learndev-student.github.io/VigyMat/web/main/404.js");
		render_content(Obj);}
};
}
load_page();
function d_links(){
	let links=document.getElementsByClassName('d_link');
	for(let n=0;n<links.length;n++){
		links[n].onclick=(event)=>{
			history.pushState({},'',links[n].href);
			get((links[n].href).split('/')).then((o)=>render_content(o));
			event.preventDefault();
		};
}
}
d_links();
window.onpopstate=()=>{
	load_page();
};
