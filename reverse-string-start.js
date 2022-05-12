/**
	* Data una stringa, restituire una stringa con i caratteri in ordine inverso.
	* Esempio:
	* reverse("ciao") => "oaic"
	*/

	function reverseString(str){
		return str.split('').reverse().join('')
	}




	console.log(	reverseString('ciaooooooooR'))