let json;
let html;
fetch('/data/js_data.js').then( response =>{
let str='';
let keys = json.keys();
for(let i=0;i<json.length;i++){
	let heading = keys[i];
	str+=`<p>Section : ${heading}</p>`;
	for(let j=0;j<json[i].length;j++){
		str+=`<p> ${json[i][0]} <a class='d_link' href='${json[i][2]['web']}>${json[i][1]}</a><p>`;
	}
}
html = {
	'About': `VigyMat , an open source project for scientific and mathematical calculation tools.`,
	'Modules': str
};
	});
export {html}
