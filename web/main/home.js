import { data } from "/VigyMat/data.js";
let modules = data['js'];
let sub = modules.sub; 
let a;
for ( let n=0 ; n < sub.length ; n++){
	a += `<p>${sub[n]}</p><ul class='d_ul'>`;
	let titles = modules.content[n][sub[n]];
	titles.forEach( i =>{
		a += `<li><a class="d_link" href='/VigyMat/modules/${sub[n]}/${i}'>${i}</a></li>`;
	});
	a += `</ul>`;
}
export const Obj = {
	title : "Home" ,
	description : "Home Page" ,
	headings : [
		"About" ,
		"Modules"
	] ,
	content : [
		"<p>The \"Open-source project\" <b>VigyMat</b> , is just an initiative to just make the world of complex scientific and mathematical calculations easy to you.</p><p>How? well this has started all with the simple webpage of VigyMat and used the open-sourcing of github to provide and develop this in many languages.(Atleast is is what our aim is!)" ,
		a
	]
};
