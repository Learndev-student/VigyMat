const obj = {
	length:2,
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
function circle_radius(arr){
	switch (""){
		case arr[0]:
			let r=math.sqrt(arr[1]/math.pi);
			let circumf=2*r*math.pi;
			return [r,arr[1],circumf];
			break;
		case arr[1]:
			let r=arr[
}
function circle_area(arr){

	return [arr[0],math.pow(arr[0],2)*math.pi];
}
function circle_circumf(arr){
	return [arr[
export const functions=[test_input1,test_input2];
