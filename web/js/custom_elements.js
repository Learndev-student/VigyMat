//Table for creating custom element ids
const table={ '0':'a','1':'b','2':'c','3':'d','4':'e','5':'f','6':'g','7':'h','8':'i','9':'j'};

//input-ele custom element class
class InputElement extends HTMLElement{
	static #id;			//private #id property for creating element id

	constructor(){
		super();
		if (!(InputElement.#id)) InputElement.#id=1;//initiate #id if not initiated with value
		this.type = 'text';				//input-ele type
		let code="inputEle";			//root-word for ids
		for(let a of (InputElement.#id).toString()){
			code+=table[a];			//id constructor
		}
		this.id = code ; 			//id of input-ele
		this.value ;
		this.attachShadow({mode:'open'});	//attach shadow DOM
		this.isChanged = false;			//property for if the input has given
	InputElement.#id++;				//increment #id for another element
	}

	connectedCallback(){
		console.log('connected input-ele');
	}
	//Attribute 'type' change callback
	typeChange(type){
		this.shadowRoot.innerHTML = "";
		switch (type){
			case 'text':
				this.type = 'text' ;
				let div = document.createElement('div');
				div.contentEditable = 'true';
				div.virtualKeyboardPolicy = 'auto';
				let span = document.createElement('span');
				span.textContent = `${this.name}  `;
				let style = document.createElement('style');
				style.innerHTML = `div{
					min-height: 18px;
					margin:10px;
					border-radius:10px;
					padding:10px;
					background: #ccc;
					}`;
				let root = this.shadowRoot;
				root.appendChild(span);
				root.appendChild(style);
				root.appendChild(div);
				let parentElement = this.parentNode.host;
				let callback = function( mutationsList , observer){
					root.host.value = div.textContent;
					root.host.isChanged = true;
					if (parentElement) parentElement.trigger();
				};
				if (this.observer) delete this.observer;
				this.observer = new MutationObserver(callback);
				this.observer.observe( div , {'attributes':true,'childList':true,'subtree':true,'characterData':true});		//observe for all changes
				break;
		}
	}

	static get observedAttributes(){
		return ['name','type'];
	}

	attributeChangedCallback(name,oldValue,newValue){
		switch (name){
			case 'name' : 
				this.name = newValue;
				this.typeChange(this.type);
				break;
			case 'type':
				this.typeChange(newValue);
				//code to be added
				break;
		}
	}

	//reset method for clear the input values
	reset(){
		switch(this.type){
			case 'text':
				this.observer.disconnect();
				let div = this.shadowRoot.querySelector('div');
				div.textContent = '';
				this.observer.observe( div , {'attributes':true,'childList':true,'subtree':true,'characterData':true});
				break;
		}
	}
	setValue(value=''){
		switch (this.type){
			case 'text':
				this.observer.disconnect();
				this.value = value;
				let div = this.shadowRoot.querySelector('div');
				div.textContent = value;
				this.observer.observe( div , {'attributes':true,'childList':true,'subtree':true,'characterData':true});
				break;
		}
	}
}

//input-block element interface
class InputBlock extends HTMLElement{
	static #id = 0 ;
	constructor(){
		super() ;
		let code="inputBlock";
                for(let a of (InputBlock.#id).toString()){
			code+=table[a];
		};
		this.id = code;
		this.attachShadow({'mode':'open'});
	}

	connectedCallback(){
		console.log('connected callback');
		this.shadowRoot.innerHTML = this.innerHTML;
		//let elements = this.querySelectorAll('input-ele');
		//for ( let i=0; i<elements.length ; i++){
		//	this.shadowRoot.appendChild(elements[i]);
		//	}
		let div = document.createElement('div');
		div.id = 'outputbox';
		let style = document.createElement('style');
		style.innerHTML = `div{
        background: #333;
        border-radius:10px;
        min-height:30%;
        padding:10px;
	margin:10px;
        color:#fff;
      }
    div span{
      color:#267cd5;
    }` //To edit here....
		let clear = document.createElement('button');
		clear.textContent = 'CLEAR';
		clear.onclick =()=> this.clear();
		this.shadowRoot.appendChild(style);
		this.shadowRoot.appendChild(div);
		this.shadowRoot.appendChild(clear);
	}

	static get observedAttributes(){
		return [] ;
	}

	attributeChangedCallback(name,newValue,oldValue){
		console.log('attribute changed');
	}

	//ontrigger method for change in input values
	ontrigger(inputs){
                        Message('calculate',{
                                'id': this.id ,
                                'values': inputs
                        });	//message the worker to calculate
                } ;

	//trigger method for ontrigger preparation
	trigger(){
		let elements = this.shadowRoot.querySelectorAll('input-ele') ;
		let inputs = [];
		for( let i =0 ; i< elements.length ; i++){
			inputs.push({
				'isChanged': elements[i].isChanged ,
				'value' : elements[i].value
			}) ;
		}
		this.ontrigger(inputs) ;
	}

	//clear all the inputs
	clear(){
		let elements = this.shadowRoot.querySelectorAll('input-ele') ;
		this.shadowRoot.querySelector('#outputbox').innerHTML = '';
		for (let i =0 ; i < elements.length ; i++){
			elements[i].reset() ;
			elements[i].isChanged = false;
		}
	}

	//output the values
	output(values){
		let elements = this.shadowRoot.querySelectorAll('input-ele') ;
		let out = this.shadowRoot.querySelector('#outputbox');
		out.innerHTML = "";
                for (let i =0 ; i < elements.length ; i++){
                        if (!elements[i].isChanged) elements[i].setValue(values[i]);
			out.innerHTML += `<p><span>${elements[i].name}</span> ${elements[i].value}</p>`;
			elements[i].isChanged = false ;
                }
	}
}

//Custom elements definition
customElements.define('input-ele' , InputElement ) ;
customElements.define('input-block' , InputBlock ) ;
