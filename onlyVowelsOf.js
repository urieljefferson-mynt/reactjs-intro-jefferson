function onlyVowelsOf(word){
	vowels = ['a', 'e', 'i', 'o', 'u']
    wordArray = word.toLowerCase().split("")
    vowelWordArray = []
    
    for(i = 0; i < wordArray.length; i++){
    	if(vowels.includes(wordArray[i])){
        	vowelWordArray.push(wordArray[i])
        }
    }
    
    
    vowelWord = vowelWordArray.join("")
    
    return vowelWord
}


console.log(onlyVowelsOf("Epherescence"))