export var obj = {
	length:2,
	placeholders:["input1","input2"]
};
function test_input1(input2){
	return input2*5;
}
function test_input2(input1){
	return input1/5;
}
export function functions=[test_input1,test_input2];
