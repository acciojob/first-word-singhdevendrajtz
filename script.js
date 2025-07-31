function firstWord(s) {
		let first_word="";
	for(x in s)
    {
        if(s[x]==" " && s.length!=0 && x!=0)
        {
            break;
        }
        else if(s[x]!=" ")
        {
            first_word+=s[x];
        }
    }
    return(first_word);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
