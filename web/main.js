import {get} from "https://learndev-student.github.io/VigyMat/web/modules.js";
function render_content(obj){
	let app=document.getElementById("app");
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
}
var url_arr=(window.location.href).split('/');
switch (url_arr[4]){
	case "modules": 
		get(url_arr).then((o)=>render_content(o));
		break;
	//default: main_page().
};
