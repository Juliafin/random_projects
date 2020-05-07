function convertBase64ToNum(b64Str) {
	let sum = 0;
	const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
		
		for (let i = b64Str.length - 1; i > -1; i--) {
	 let char = b64Str[i];
	console.log("char", char)
	 let charValue = charSet.indexOf(char) + 1;
	console.log("Value of char", charValue)
	 sum += (charValue * (64 ** (b64Str.length -1 - i)))
}
	console.log(sum)
}

convertBase64ToNum("asdjf437d82kfe2AB")