export const obj = {
	length:2,
	placeholders:["input1","input2"],
	type:["number","number"]
};
function test_input1(arr){
	return arr[0]*5;
}
function test_input2(arr){
	return arr[0]/5;
}
export const functions=[test_input1,test_input2];
