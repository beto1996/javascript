// 1 დავალება

function myfun(){
    var a,b,c;
    a=document.getElementById('username').value
    b=document.getElementById('password1').value
    c=document.getElementById('repeat').value
    
    alert("name   "+a);
    alert("password   "+b);
    alert("repeat password   "+c)
    
}



// 2 დავალება

function multiple()
{
    var values = document.getElementById('value1').value;
    var showTables = '';
    for (var i=2; i<=100; i++) {
       showTables += values + " x " + i +" = "+ values*i + "<br>";
    }
    document.getElementById('tables').innerHTML = showTables;


}

// davaleba 4

function sumOfSquares() {
    var a = prompt("Enter first number");
    var b = prompt("Enter second number");
    var x=parseInt(a);
    var y=parseInt(b);
    
    alert (x+y);
    
}

// დავალება 5

var btn = document.getElementById('btn');

btn.addEventListener('click', UpdateTable);

var maxLength = 4;

// Returns a random number
function CreateLottoValues() {
    return Math.floor(Math.random() * 4 + 1);
}
function UpdateTable() {

    for (var i = 0; i < maxLength; i++) {
        for (var j = 0; j < maxLength; j++) {
            tmp = 'cell' + i + j;
            document.getElementById(tmp).innerHTML = CreateLottoValues();
        }
    }
}

UpdateTable();

//  დავალება 3


function CheckPassword(inputtxt) { 

    var passw=  /^[A-Za-z]\w{7,14}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}


