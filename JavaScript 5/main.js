//  1 დავალება
//ორშაბათი
function number1(){
   var a;
   a=document.getElementById("wraper3");
   console.log(a);
   a.innerHTML=("ორშაბათი");

}
//სამშაბათი
function number2(){
   var a;
   a=document.getElementById("wraper3");
   console.log(a);
   a.innerHTML=("სამშაბათი");
}

//ოთხშაბათი
function number3(){
   var a;
   a=document.getElementById("wraper3");
   console.log(a);
   a.innerHTML=("ოთხშაბათი");
}

//ხუთშაბათი
function number4(){
   var a;
   a=document.getElementById("wraper3");
   console.log(a);
   a.innerHTML=("ხუთშაბათი");
}
//პარასკევი
function number5(){
   var a;
   a=document.getElementById("wraper3");
   console.log(a);
   a.innerHTML=("პარასკევი");
}

// შაბათი
function number6(){
   var a;
   a=document.getElementById("wraper3");
   console.log(a);
   a.innerHTML=("შაბათი");
}

// კვირა
function number7(){
   var a;
   a=document.getElementById("wraper3");
   console.log(a);
   a.innerHTML=("კვირა");
}


//დავალება 2 კალკულატორი\


      //function that display value 

      function dis(val) 
      { 
          document.getElementById("result").value+=val 
      } 
        
      //function that evaluates the digit and return result 
      function solve() 
      { 
          let x = document.getElementById("result").value 
          let y = eval(x) 
          document.getElementById("result").value = y 
      } 
        
      //function that clear the display 
      function clr() 
      { 
          document.getElementById("result").value = "" 
      }


      