const obj = {
	placeholders:["length","total surface area","lateral SA","volume", "diagonal length(2D)", "diagonal length(3D)"],
	type:["number","number","number","number","number"]
};
export const Obj={
	title:"Cube",
	loaded:false,
	description:"Get to know about the dimensions of Cube!",
	calc: 1,
	headings:["About","Calculate","Algorithm"],
	content:["The <b>CUBE</b>, simplest of all. Here we can know the common mathematical properties of it.",obj,"The calculation is very simple. We nee to only one thing to find all others, hence the cube is so <b>simple</b>!"]
};
function f0(e_arr){
	let l=e_arr[0].value;
	return [l, 6*l*l, 4*l*l, l*l*l, Math.sqrt(2*l*l), Math.sqrt(3*l*l)];
}
function f1(e_arr){
	let l=Math.sqrt(e_arr[1].value/6);
	return [l, 6*l*l, 4*l*l, l*l*l, Math.sqrt(2*l*l), Math.sqrt(3*l*l)];
}
function f2(e_arr){
	let l=Math.sqrt(e_arr[2].value/4);
	return [l, 6*l*l, 4*l*l, l*l*l, Math.sqrt(2*l*l), Math.sqrt(3*l*l)];
}
function f3(e_arr){
	let l=Math.pow(e_arr[3].value,1/3);
	return [l, 6*l*l, 4*l*l, l*l*l, Math.sqrt(2*l*l), Math.sqrt(3*l*l)];
}
function f4(e_arr){
	let l=Math.sqrt(Math.pow(e_arr[4].value,2)/2);
	return [l, 6*l*l, 4*l*l, l*l*l, Math.sqrt(2*l*l), Math.sqrt(3*l*l)];
}
function f5(e_arr){
	let l=Math.sqrt(Math.pow(e_arr[5].value,2)/3);
	return [l, 6*l*l, 4*l*l, l*l*l, Math.sqrt(2*l*l), Math.sqrt(3*l*l)];
}

export const list=[[1,0,0,0,0,0], [0,1,0,0,0,0], [0,0,1,0,0,0], [0,0,0,1,0,0], [0,0,0,0,1,0],[0,0,0,0,0,1]];
export const functions=[f0,f1,f2,f3,f4,f5];
