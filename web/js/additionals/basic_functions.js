function Functions_obj(calc_functions,...arr){
	arr.forEach( f=>{
		this[f.name] = f;
	});
	this.calc_functions=[];
	let i=0;
	calc_functions.forEach( f=>{
		this.calc_functions.push(f);
	});
}
export {Functions_obj}
