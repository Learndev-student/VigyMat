class InputElement extends HTMLElement{
	constructor(){
		super();
		this.contenteditable = 'true' ;
		this.virtualkeyboardpolicy='manual' ;
		this.type ;
		this.placeholder ;
		this.lastvalue ;
		let shadow = this.attachShadow({mode:'closed'});
		let p = document.createElement('p');
		p.textContent = this.textContent ;
		p.observedAttributes = () =>{
			return ['textContent'];
		} ;
		p.attributeChangedCallback = (name,oldValue,newValue) =>{
			if (oldValue!=newValue) this.textContent = newValue;
		}
		shadow.appendChild(p);
	}
	get observedAttributes(){
		return ['textContent'];
	}
	attributeChangedCallback(name, oldValue, newValue){
		switch (name){
			case 'textContent':
				this.isChanged = true ;
				this.shadowRoot.getElementsByTagName('p')[0].textContent = newValue ;
				this.parentElememt.trigger() ;
		}
	}
}


class InputBlock extends HTMLElement{
	static #id = 0 ;
	constructor(){
		super() ;
		let id0 = this.id = `id${InputBlock.#id++}`;
		this.ontrigger = (inputs) => {
			Message('calculate',{
				'id': id0 ,
				'valiez': inputs
			});
		} ;
	}
	trigger(){
		let elements = this.getElementsByTagName('input-ele') ;
		let inputs = [];
		for( let i =0 ; i< elements.length ; i++){
			inputs.push({
				'value' : elements[i].value ,
				'type' : elements[i].type
			}) ;
		}
		this.ontrigger(inputs) ;
	}
	clear(){
		let elements = this.getElementsByTagName('input-ele') ;
		for (let i =0 ; i < elements.length ; i++){
			elements[i].textContent = "" ;
			elements[i].isChanged = false;
		}
	}
	output(values){
		let elements = this.getElementsByTagName('input-ele') ;
                for (let i =0 ; i < elements.length ; i++){
                        if (!elements[i].isChanged) elements[i].textContent = values[i];
			elements[i].isChanged = false ;
                }
	}
}

customElements.define('input-ele' , InputElement ) ;
customElements.define('input-block' , InputBlock ) ;
