// 1
function str1(){
    s1="tJavaScript strings are used for storing and manipulating tex.";
    document.write(s1);
    document.write("<br>");
    document.write(s1.length);
    document.write("<br>");
   
}
// 2
function findCountA(str) {
	// console.log(str);
	// calculate repeated characters
	var count =0;
	[...str].forEach(el => {
		if (el==='a') {
			count++;
		}
    });
  document.write(str);
  document.write("<br>");
  document.write(count);
	return count;
}

// 3
function findCharCode(str) {
	// console.log(str);
	// calculate repeated characters
	[...str].forEach(el => {
		document.write(el.charCodeAt(0));
	});
}


 // 4
 function genRandomString(str) {
	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var str = ''
	for (let i = 0; i < 40; i++) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
    document.write(str);
    document.write("<br>");
    
}

 // 5
 function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    document.write(result);
    return result;
}