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
	return [arr[0],arr[0]*math.pi*2,arr[0]*arr[0]*math.pi];
}
function f1(arr){
	return [math.sqrt(arr[1]/math.pi),math.sqrt(arr[1]/math.pi)*math.pi*2];
}
function f2(arr){
	let r=arr[2]/(math.pi*2);
	return [r,math.pi*r*r,arr[2]];
}
export const list=[[1,0,0],[0,1,0],[0,0,1]];
export const functions=[f0,f1,f2];
