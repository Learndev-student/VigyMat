class InputElement extends HTMLElement
{
	constructor()
	{
		super();
		this.contenteditable = 'true' ;
		this.virtualkeyboardpolicy='manual' ;
		this.type ;
		this.placeholder ;
		this.lastvalue ;
		this.onclick = this.onchange = () => {
			if ( this.lastValue != this.textContent )
			{
				this.isChanged = 'true' ;
				this.parentElement.trigger() ;
			}
		}
	static get observedAttributes()
	{
	}
	attributeChangedCallback(name, oldValue, newValue)
	{
	}
}

class InputBlock extends HTMLElement
{
	constructor()
	{
		super() ;
		this.ontrigger = (inputs) =>
		{
			Message('calculate',inputs);
		} ;
	}
	trigger()
	{
		let elements = this.getElementsByTagName('input-ele') ;
		let inputs = [];
		for( let i =0 ; i< elements.length ; i++)
		{
			inputs.push({
				'value' : elements[i].value ,
				'type' : elements[i].type
			}) ;
		}
		this.ontrigger(inputs) ;
	}
	clear()
	{
		let elements = this.getElementsByTagName('input-ele') ;
		for (let i =0 ; i < elements.length ; i++)
		{
			elements[i].texfContent = "" ;
		}
	}
}

customElements.define('input-ele' , InputElement ) ;
customElements.define('input-block' , InputBlock ) ;
