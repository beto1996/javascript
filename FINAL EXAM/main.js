    // დავალება 1
function myfun(){
    var a,b,c;
    a=document.getElementById('username').value
    b=document.getElementById('password1').value
  
    
    alert("name   "+a);
    alert("last name   "+b);
    
    
}


    //დავალება 2
function multiple() {
    const isMultipleOfThree = num => {
        const div = parseInt(num / 9);
      
        return num === div * 9;
      };
      
      for (let i = 2; i <= 100; i++) {
        if (isMultipleOfThree(i)) {
          console.log(i);
        }
      }
}

    // დავალება 4
    function average(a, b) {
        return ((a + b) /2);
    }

    document.getElementById("averageButton").onclick = function (){
            var a = document.getElementById("userInput1").value;
        var b = document.getElementById("userInput2").value;    		
        document.write(average());
    }

    //დავალება 6
    function str2(){
        s = "JavaScript strings Script ";
        document.write(s);
        document.write("<br>");
        document.write(s.indexOf("Script"));
        document.write("<br>");
        document.write(s.lastIndexOf("Script"));
        document.write("<br>");
        document.write(s.indexOf("scrIpt")); 
     }
     function str4(){
        s = "JavaScript strings Script are Script used.";
        document.write(s);
        document.write("<br>");
        document.write(s.replace("Script", "****"));
        document.write("<br>");
        document.write(s.replace(new RegExp("Script", "g"), "****"));
        document.write("<br>"); 
     }
     // დავ 5
     function random() {
        var d = new Date();
        var random= Math.floor(Math.random()*60);
        var td1 = document.createElement("td");
        td1.innerHTML = random;
        
        var Minutes = d.getMinutes();
        var td2 = document.createElement("td");
        td2.innerHTML = random;
        
        var table = document.getElementById("tblResult");
        var row = document.createElement("tr");
        
        row.appendChild(td1);
        row.appendChild(td2);
        table.appendChild(row);
         
     }
      //დავალება 3
      function readNumber() {
        let num;
      
        do {
          num = prompt("Enter a number please?", 0);
        } while ( !isFinite(num) );
      
        if (num === null || num === '') return null;
      
        return +num;
      }
      
      alert(`Read: ${readNumber()}`);
      
      //დავალება 8
      function SetDate(){
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;


document.getElementById('myDate').value = today;


}

//დავალება
function check() {
   var val = frm1.uname.value;
   //alert(val);
   if (val.indexOf("@") > 0)
   {
      alert ("email");
      document.getElementById('isEmail1').value = true;
      //alert( document.getElementById('isEmail1').value);
   }else {
      alert("usernam");
      document.getElementById('isEmail1').value = false;
      //alert( document.getElementById('isEmail1').value);
   }
}