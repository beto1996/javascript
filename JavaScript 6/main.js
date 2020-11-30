
// 1.	ააგეთ ქვემოთ მოცემული ფორმა, რიცხვზე დაჭერის შედეგად ტექსტურ ველში გამოიტანეთ კვირის შესაბამისი დღე
function num1(){
    var a;
    a=document.getElementById("result");
    console.log(a)
    a.innerHTML=("ორშაბათი")
}

function num2(){
    var a;
    a=document.getElementById("result")
    a.innerHTML=("სამშაბათი")
}

function num3(){
    var a;
    a=document.getElementById("result")
    a.innerHTML=("ოთხშაბათი")
}
function num4(){
    var a;
    a=document.getElementById("result")
    a.innerHTML=("ხუთშაბათი")
}
function num5(){
    var a;
    a=document.getElementById("result")
    a.innerHTML=("პარასკევი")
}
function num6(){
    var a;
    a=document.getElementById("result")
    a.innerHTML=("შაბათი")
}
function num7(){
    var a;
    a=document.getElementById("result")
    a.innerHTML=("კვირა")
}

// 2.  ააგეთ მარტივი კალკულატორი შესაბამისი ფორმების საშუალებით. რომლის საშუალებითაც შესაძლებელი იქნება გამრავლების, გაყოფის, მიმატების, გამოკლების, ახარისხების, ფესვის ამოღების ოპერაცია.

function dis(cifri) 
{ 
    document.getElementById("sum").value+=cifri

} 

function solve() { 
    let x = document.getElementById("sum").value 
    let y = eval(x) 
    document.getElementById("sum").value = y 
}  


function clr() { 

          document.getElementById("sum").value = "" 
      }


// 3.	ააგეთ მარტივი პროცენტის დარიცხვის ფორმულის კალკულატორი შესა-ბამისი ველებით.
function simpl()
    {
    var p,r,t;
    p=parseFloat(prompt("Please Enter Principle Amount"));
    r=parseFloat(prompt("Please Enter Rate Amount"));
    t=parseFloat(prompt("Please Enter Time(year)"));
    var si=(p*r*t)/100;
    document.write("Simple Interest (calculated anually) is: "+si);
    }
