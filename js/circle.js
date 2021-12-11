const obj = {
	placeholders:["radius","area","circumference"],
	type:["number","number","number"]
};
export const Obj={
	title:"Circle",
	loaded:false,
	description:"Second module for testing of the site - Circle",
	calc: 1,
	headings:["About","Calculate","Algorithm"],
	content:["This is again a testing module. But this time with circles, trying to get multiple output from single inpiut and more.",obj,"Here the problem is to give multiple outputs from a single input in a combination."]
};
function f0(e_arr){
	let arr=[e_arr[0].value, e_arr[1].value, e_arr[2].value];
	let r=arr[0];
	return [r, r*Math.PI*2, r*r*Math.PI];
}
function f1(e_arr){
	let arr=[e_arr[0].value, e_arr[1].value, e_arr[2].value];
	let r=Math.sqrt(arr[1]/Math.PI);
	return [r, arr[1], 2*Math.PI*r];
}
function f2(e_arr){
	let arr=[e_arr[0].value, e_arr[1].value, e_arr[2].value];
	let r=arr[2]/(Math.PI*2);
	return [r, Math.PI*r*r, arr[2]];
}
export const list=[[1,0,0], [0,1,0], [0,0,1]];
export const functions=[f0,f1,f2];
