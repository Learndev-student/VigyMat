const table={ '0':'a','1':'b','2':'c','3':'d','4':'e','5':'f','6':'g','7':'h','8':'i','9':'j'};
class InputElement extends HTMLElement{
	static #id;
	constructor(){
		super();
		if (!(InputElement.#id)) InputElement.#id=1;
		this.type ;
		let code="inputEle";
		for(let a of (InputElement.#id).toString()){code+=table[a];console.log(`code :${code}`);};
		this.code = code ;
		this.value ;
		this.attachShadow({mode:'open'});
		this.isChanged = false;
		let input = document.createElement('p');
		input.contentEditable = true ;
		input.virtualKeyboardPolicy = 'auto' ;
		input.inputmode = 'text' ;
		input.id = code;
		input.style=`
		min-height:20%;
		display:block;
		width:50%;
		background:#ccc;
		padding:5px;
		border-radius:7px;`;
		this.shadowRoot.appendChild(input);
	let root = this.shadowRoot;
	let parentEle = this.parentElement;
        this.observer = new MutationObserver( function(mutationList , observer){
		console.log('reload()');
		(root.host).value = (root.querySelector(`#${code}`))['textContent'];
		(root.host).isChanged = true;
		if (parentEle){
                parentEle.trigger();
          }
          });
	console.log(code);
          this.observer.observe(root.querySelector(`#${code}`) , {'attributes':true,'childList':true,'subtree':true,'characterData':true});
	InputElement.#id++;
	}

	reset(){
		this.shadowRoot.querySelector('p').textContent = '';
	}
	setValue(value=''){
		this.observer.disconnect();
		this.shadowRoot.querySelector('p').textContent = value;
		this.observer.observe(this.shadowRoot.querySelector(`#${this.code}`) , {'attributes':true,'childList':true,'subtree':true,'characterData':true});
	}
}

class InputBlock extends HTMLElement{
	static #id = 0 ;
	constructor(){
		super() ;
		let code="inputBlock";
                for(let a of (InputBlock.#id).toString()){code+=table[a]};
		this.id = code;
	}
	ontrigger(inputs){
                        Message('calculate',{
                                'id': this.id ,
                                'values': inputs
                        });
                } ;
	trigger(){
		let elements = this.getElementsByTagName('input-ele') ;
		let inputs = [];
		for( let i =0 ; i< elements.length ; i++){
			inputs.push({
				'isChanged': elements[i].isChanged ,
				'value' : elements[i].value
			}) ;
		}
		this.ontrigger(inputs) ;
	}
	clear(){
		let elements = this.getElementsByTagName('input-ele') ;
		for (let i =0 ; i < elements.length ; i++){
			elements[i].reset() ;
			elements[i].isChanged = false;
		}
	}
	output(values){
		let elements = this.getElementsByTagName('input-ele') ;
                for (let i =0 ; i < elements.length ; i++){
                        if (!elements[i].isChanged) elements[i].setValue(values[i]);
			elements[i].isChanged = false ;
                }
	}
}

customElements.define('input-ele' , InputElement ) ;
customElements.define('input-block' , InputBlock ) ;
