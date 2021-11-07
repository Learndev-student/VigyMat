const obj = {
	length:2,
	placeholders:["input1","input2"],
	type:["number","number"]
};
export const Obj={
	title:"Test Module",
	loaded:false,
	description:"A test module just for testing, You know!",
	calc: 1,
	headings:["About","Calculate","Algorithm"],
	content:["This is just a testing module to test the site.",obj,"The algorithm is just simple.If you enter x (in input1) you will get 5x or vice-vers. It is just simple nothing to worry!."]
};
function test_input1(arr){
	return arr[0]*5;
}
function test_input2(arr){
	return arr[0]/5;
}
export const functions=[test_input1,test_input2];
