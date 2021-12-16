const obj = {
	placeholders : [ "radius" , "surface area" , "volume" ] ,
	type : [ "number" , "number" , "number" ]
};
export const Obj = {
	title : "Sphere" ,
	loaded : false ,
	description : "Second module for testing of the site - Sphere" ,
	calc : 1 ,
	headings : ["About","Calculate","Algorithm"] ,
	content : [
		"This is again a testing module. But this time with spheres, trying to get multiple output from single inpiut and more." ,
		 obj , 
		"Here the problem is to give multiple outputs from a single input in a combination." 
	]
};
function f0( e_arr ) {
	let r = e_arr[0].value ;
	return [ r , 4*Math.PI*r*r , (4/3)*Math.PI*Math.pow(r,3) ];
}
function f1( e_arr ) {
	let r = Math.sqrt( e_arr[1].value/(4*Math.PI) );
	return [ r , e_arr[1].value , (4/3)*Math.PI*Math.pow(r,3) ];
}
function f2( e_arr ) {
	let r = Math.pow( e_arr[2].value*3/(4*Math.PI ) , 1/3 );
	return [ r , 4*Math.PI*r*r , e_arr[2].value ];
}
export const list=[
	[1,0,0] ,
	[0,1,0] ,
	[0,0,1]
];
export const functions=[ f0 , f1 , f2 ] ;
