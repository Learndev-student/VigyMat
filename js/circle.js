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
function f0(arr){
	return [arr[0],arr[0]*Math.PI*2,arr[0]*arr[0]*Math.PI];
}
function f1(arr){
	return [Math.sqrt(arr[1]/Math.PI),Math.sqrt(arr[1]/Math.PI)*Math.PI*2];
}
function f2(arr){
	let r=arr[2]/(Math.PI*2);
	return [r,Math.PI*r*r,arr[2]];
}
export const list=[[1,0,0],[0,1,0],[0,0,1]];
export const functions=[f0,f1,f2];
