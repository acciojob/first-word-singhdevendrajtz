function firstWord(s) {
	if(s.length)
	let x=s.split(' ');
	return(x[0]);
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
