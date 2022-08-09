document.body.style.background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(80,120,203,1) 0%, rgba(29,253,168,0.8883928571428571) 59%, rgba(34,251,194,1) 100%, rgba(252,176,69,1) 100%)";
        var name=prompt("Enter your Name");
        var a=prompt("Enter the First Number");
        var b=prompt("Enter the Second Number");
        
        var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  var date = "0"+today.getDate()+'/'+"0"+(today.getMonth()+01)+'/'+today.getFullYear();
  
  var dateTime = date;
   
  document.getElementById("date").innerHTML = dateTime + ' <br> Day :- ' + daylist[day];
       
        var add=Number(a)+ Number(b);
        var divide=a/b;
        var mult=a*b;
        var minu=a-b;
      
         document.getElementById("name3").innerHTML=name;
        document.getElementById("add").innerHTML=add;
        document.getElementById("divi").innerHTML=divide;
        document.getElementById("mul").innerHTML=mult;
        document.getElementById("sub").innerHTML=minu;
