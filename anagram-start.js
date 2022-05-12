/**
	* Scrivere una funzione che controlli se due parole sono anagrammi e mostrare
	* il risultato in console.
	* Esempio
	* isAnagram("cinema", "iceman") => true
	* isAnagram("manuel", "giraffa") => false
	*/



	function isAnagram(a,b){
		if(!a.lenght == b.lenght){
			return false
		}

		let firstWord = a.toLowerCase().split('').sort().join('')
		let secondWord = b.toLowerCase().split('').sort().join('')
		if(firstWord == secondWord){
			return true
	   }else{
		   return false
	   }
}

console.log(isAnagram('Ciao','oica'))

