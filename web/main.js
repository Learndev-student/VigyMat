import {get} from "https://learndev-student.github.io/VigyMat/web/modules.js";
function render_content(obj){
	let app=document.getElementById("app");
	let n=0;
	obj["heading"].forEach((i)=>{
		let box=document.createElement("div");
		box["class"]="box";
		let heading=document.createElement("h2");
		heading["heading"]="heading";
		heading.text=i;
		box.appendChild(heading);
		box.innerHTML+=obj["content"][n++];
		app.appendChild(box);
	});
}
var url_arr=(window.location.href).split('/');
switch (url_arr[4]){
	case "modules": 
		let obj=get(url_arr);
		render_content(obj);
		break;
	//default: main_page().
};
