
function number5() {
    r = Math.random();
    document.write("<br>");
    document.write(r);
    document.write("<br>");
    ducument.write(r*10);
    document.write("<br>");
    document.write(Math.floor(r10))
    document.write("<br>");
    document.write(Math.ceil(r*10));
   
}

// 1
function roundUp(x) {
    x=25;
    document.write("<hr>");
    document.write(x);
    document.write("<br>");
    document.write(Math.ceil(x*5) );
    
   
}

// 2
function roundDown(x) {
	x=5;
    document.write("<hr>");
    document.write(x);
    document.write("<br>");
    document.write(Math.floor(16*10) );
    
}

// 3
function round(x) {
    x=5;
    document.write(x);
    document.write(Math.round(x*16));
	
}

// 4 ver gavakeTe
function roundUpOrDown(x, up) {
	if (up) {
		return Math.ceil(x);
	} else {
		return Math.floor(x);
	}
}

// 5
function randomNumber() {
    r = Math.random();
    document.write(r);
	
}

// 6
function number6(min = 5, max = 50) {
	name = Math.random() * (max - min) + min;
	document.write(name);
	
}

// 7
function number3(min=6, max=12) {
	const res = Math.random() * (max - min) + min;
    document.write(res);
    return res;
	
}

// 8
function randomIntInRange(min=2, max=5) {
	min = Math.ceil(min);
	max = Math.floor(max);
	const res = Math.floor(Math.random() * (max - min) + min);
	document.write(res);
	return res;
}
