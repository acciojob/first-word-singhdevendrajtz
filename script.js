function firstWord(s) {
		let first_word="";
	for(x of s)
    {
        if(x==" ")
        {
            break;
        }
        else 
        {
            first_word+=x;
        }
    }
    return(first_word);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
