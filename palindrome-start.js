/**
	* Scrivere una funzione che controlli se una data stringa è palindroma
	* oppure no. Mostrare il risultato in console.
	* isPalindrome("anna") => true
	* isPalindrome("manuel") => false
	*/


	
	function isPalindorme(a){
		let toLowerCase = a.toLowerCase()

		let reverseWord = toLowerCase.split('').reverse().join('')
		if(toLowerCase == reverseWord){
			return true
		}else{
			return false
		}
		

		
}

console.log(isPalindorme('anna'))

