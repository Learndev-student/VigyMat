const obj = {
	placeholders:["input1","input2"],
	type:["number","number"]
};
export const Obj={
	description:"A test module just for testing, You know!",
	calc: 1,
	headings:["About","Calculate","Algorithm"],
	content:["Hello World!, here the about is written.",obj,"Some algorithms"]
};
function test_input1(arr){
	return arr[0]*5;
}
function test_input2(arr){
	return arr[0]/5;
}
export const functions=[test_input1,test_input2];
