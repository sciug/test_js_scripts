/**
	* Data una stringa, restituisci il carattere che viene ripetuto più volte.
	* Esempio
	* maxChar("abccccccd") => "c"
	* maxChar("apple 12311111") => "1"
	*/
	let charBase= {}
	
	function maxChar(str){
		
		
		str.toLowerCase()
		.split('')
		.forEach(char => {
			if(char != ''){
				if(charBase[char]==null){
					charBase[char] = 1
				}else{
					charBase[char] +=1
				}
			}});


			

	}

	console.log(maxChar('ciaoooo'))

	console.log(charBase)