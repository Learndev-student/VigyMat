import {get} from "https://learndev-student.github.io/VigyMat/web/modules.js";
function render_content(obj){
	let app=document.getElementById("app");
	let n=0;
	obj["headings"].forEach((i)=>{
		let box=document.createElement("div");
		box["class"]="box";
		let heading=document.createElement("h2");
		heading["class"]="heading";
		heading.text=i;
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
		get(url_arr).then((o)=>{
		let obj=o;
		console.log(obj, "Got by get");
		render_content(obj);
		});
		break;
	//default: main_page().
};
