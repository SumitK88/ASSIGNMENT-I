let num='';
const but=document.querySelectorAll(".but");
const backspace=document.querySelector("#back");

const sendtext=()=>{document.getElementById('text').innerText=num;}

but.forEach(i=>{
    i.addEventListener("click",()=>{
        if(num.length>=10){
            alert("Max digits reached");
        }else{
            num+=i.innerText;
            sendtext();
        }
    });
});

backspace.addEventListener("click",()=>{
    num=num.slice(0,num.length-1);
    if(num.length<=0){
        document.getElementById('text').innerText='Text Here';
        setTimeout(()=>{alert("Nothing to erase");},100);
    }
    else{sendtext();}
});