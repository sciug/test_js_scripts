/**
	* Scrivere una funzione che mostri in console una serie di numeri da 1 a 100.
	* Per ogni multiplo di 3 dovrà mostrare "Fizz", mentre per ogni multiplo di 5
	* dovrà mostrare "Buzz". Nel caso il numero sia multiplo di entrambi dovrà
	* mostrare "FizzBuzz".
	*/

	let numbers = []


	for (let i = 1; i < 101; i++) {
		numbers.push(i);
	  }

	 


	  function isFizzOrBuzz(numbers){

		numbers.forEach(number => {
			if (number % 3 == 0 && number % 5 ==0){
				console.log(number +' is FizzBuzz') 
			}else if (number % 5 == 0){
				console.log(number +' is buzz') 
			}else if (number % 3 == 0){
				console.log(number +' is fizz') 
			}
			
			
		});

	  }


	  console.log(isFizzOrBuzz(numbers))
