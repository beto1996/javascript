// 5
function getdate(){
    r = new Date();
    document.write(r.getFullYear());
    document.write("<br>")
    document.write(r.getMonth());
    document.write("<br>")
    document.write(r.getDate());
    document.write("<br>")
    document.write("hours=" +r.getHours())
    document.write("<br>")
    document.write("minute=" +r.getMinutes())
    document.write("<br>")
    document.write("second=" +r.getSeconds())
    document.write("<br>")
    document.write("miliSecond=" +r.getMilliseconds())
   
}
 // 6
 function autotimeupdate(){

        var datetime = new Date();
        var hours = datetime.getHours();
        var minute = datetime.getMinutes();
        var second = datetime.getSeconds();

         if(hours >=12) {
                am_or_pm.innerHTML="PM";
             } else{
                am_or_pm.innerHTML="AM"; 
             }  

        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML =minute
        document.getElementById('second').innerHTML = second;
        
        setInterval(autotimeupdate,1000)
    }
