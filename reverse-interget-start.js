/**
	* Dato un numero intero restituire il numero inverso
	* Esempio
	* reverseInt(15) => 51
	* reverseInt(981) => 189
	* reverseInt(-90) => -9
	* reverseInt(-15) => -51
	*/

	function reverseInt(number){
		let toStringNumber = number.toString()

		
			return  parseFloat(toStringNumber.split('').reverse().join('')) * Math.sign(number)
			                 
		  

	}

	console.log(reverseInt(-756))