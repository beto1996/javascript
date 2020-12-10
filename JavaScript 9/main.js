function clickMe(){
   c = document.querySelector(".box1");
   box = document.createElement("div");
   box.classList.add("box");
   c.appendChild(box);
}


function checkKey(event){
   e = e || window.Event;
   if (e.keyCode == '38') {
      document.getElementById("square").style.height = "70px"
   }
   else if(e.keyCode == '40'){
      document.getElementById("square").style.height = "100%"
   }
   else if(e.keyCode == '37'){
      document.getElementById("square").style.width = "70px"
   }
   else if(e.keyCode == '39'){
      document.getElementById("square").style.width = "100%"
   }
}

function down(){
   a = document.getElementById("square").style.bottom ="0px";
 

}
function up(){
   a = document.getElementById("square").style.top ="0px";
}
function left(){
   a = document.getElementById("square").style.left ="0px";
}

function right(){
   a = document.getElementById("square").style.right="0px";
}
function downleft(){
   a = document.getElementById("square").style.bottom ="0px", left = "0px";
}
function downright(){
   a = document.getElementById("square").style.bottom ="0px", right = "0px";
}
function upleft(){
   a = document.getElementById("square").style.top ="0px", left = "0px";
}
function upright(){
   a = document.getElementById("square").style.top ="0px", right = "0px";
}


function leftArrowPressed() {
   var element = document.getElementById("square");
   element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed() {
   var element = document.getElementById("square");
   element.style.left = parseInt(element.style.left) + 5 + 'px';
}

function upArrowPressed() {
   var element = document.getElementById("square");
   element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed() {
   var element = document.getElementById("square");
   element.style.top = parseInt(element.style.top) + 5 + 'px';
}


function checkKey(event){
   e = e || window.Event;
   if (e.keyCode == '38') {
      document.getElementById("square").style.height = "70px"
   }
   else if(e.keyCode == '40'){
      document.getElementById("square").style.height = "100%"
   }
   else if(e.keyCode == '37'){
      document.getElementById("square").style.width = "70px"
   }
   else if(e.keyCode == '39'){
      document.getElementById("square").style.width = "100%"
   }
}




function moveSelection(event) { 
   document.getElementById("square")   ;                
   switch (event.keyCode) {
       case 37:
           leftArrowPressed();
       break;

       case 39:
           rightArrowPressed();
       break;

       case 38:
           upArrowPressed();
       break;

       case 40:
           downArrowPressed();
       break;
   }
};


function leftArrowPressed() {
   var element = document.getElementById("square");
   element.style.left = parseInt(element.style.left) - 5 + 'px';
}

function rightArrowPressed() {
   var element = document.getElementById("square");
   element.style.left = parseInt(element.style.left) + 5 + 'px';
}

function upArrowPressed() {
   var element = document.getElementById("square");
   element.style.top = parseInt(element.style.top) - 5 + 'px';
}

function downArrowPressed() {
   var element = document.getElementById("square");
   element.style.top = parseInt(element.style.top) + 5 + 'px';
}


function checkKey(event){
   e = e || window.Event;
   if (e.keyCode == '38') {
      document.getElementById("square").style.height = "70px"
   }
   else if(e.keyCode == '40'){
      document.getElementById("square").style.height = "100%"
   }
   else if(e.keyCode == '37'){
      document.getElementById("square").style.width = "70px"
   }
   else if(e.keyCode == '39'){
      document.getElementById("square").style.width = "100%"
   }
}