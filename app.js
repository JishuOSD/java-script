let res = document.querySelector(".res")
let dec = document.querySelector(".dec")
let inc = document.querySelector(".inc")


let a = 0;
inc.addEventListener('click',function(){
     
      if(a == 5){
        // alert('not found');
        inc.style.backgroundColor  = "red"
      }else{
        a++;
        res.innerHTML = a;
      }
    
      
    
});


let c = 0;
dec.addEventListener('click',()=>{
    
    if(a<1){
        dec.style.backgroundColor  = "red"
    // alert("sorry..!");
    }else{
        a--;
    res.innerHTML=a;

    }
});



let clrchange = document.querySelector("#clrchange");
let btn = document.querySelector(".btn");

btn.addEventListener('click', function(){
    let red = Math.round(Math.random() * 255);
    let green = Math.round(Math.random() * 255);
    let blue = Math.round(Math.random() * 255);

    console.log(c);
    clrchange.style.background = `rgb(${red},${green},${blue})`;
    // clrchange.style.backgroundColor = ""
});
