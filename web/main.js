import {get} from "https://learndev-student.github.io/VigyMat/web/modules.js";
function render_content(obj){
	let app=document.getElementById("app");
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
}
var url_arr=(window.location.href).split('/');
switch (url_arr[4]){
	case "modules": 
		get(url_arr).then((o)=>render_content(o));
		break;
	//default : render_
};
function d_links(){
	let links=document.getElementsByClassName('d_link');
	for(let n=0;n<links.length;n++){
		links[n].onclick=(event)=>{
			get((`https://learndev-student.github.io/VigyMat${l.href}`).split('/'));
			event.preventDefault();
		};
}
}
d_links();
