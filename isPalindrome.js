function isPalindrome(word){
    wordArray = word.toLowerCase().split("")
    reversedWordArray = word.toLowerCase().split("").reverse()


	if (wordArray.length === reversedWordArray.length &&
    wordArray.every((val, index) => val === reversedWordArray[index])){
    	return true
    }else{
    	return false
    }
}


console.log(isPalindrome("racecar"))
console.log(isPalindrome("moon"))