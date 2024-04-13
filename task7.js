
let frame = document.createElement("div");
frame.id="frame";
document.body.appendChild(frame);
let screen = document.createElement("div");
screen.id="screen";
frame.appendChild(screen);
let boutons = document.createElement("div");
boutons.id="boutons";
frame.appendChild(boutons);
array=["(",")","C","=","9","8","7","+","6","5","4","-","3","2","1","X","0",".","%","/"];

for(let i=0;i<20;i++){
    let newb =document.createElement("button");
    boutons.appendChild(newb);
    newb.id="bouton"+i;
    newb.innerText=array[i];
}
let result = "";
function handleclick (bouton){
    if (bouton.innerText=="="){
        result=eval(result);
        screen.innerText=result;
    
    }
    else if(bouton.innerText=="C") {
        result="";
        screen.innerText=result;
    }
    else if (bouton.innerText=="X"){
        result+="*";
        screen.innerText=result;
    }
    else{
        result+=bouton.innerText;
        screen.innerText=result;
       console.log(result);
    }
}
for(let i=0;i<20;i++){
    let bouton= document.getElementById("bouton"+i);
    bouton.addEventListener("click",()=>{handleclick(bouton);
    });
}


