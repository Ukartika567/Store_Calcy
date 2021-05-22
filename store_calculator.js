console.log('We are at Revised js class.');

let screen=document.getElementById('screen');
let buttons=document.querySelectorAll('button');
let screenValue= '';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        let buttonText=e.target.innerText;
        console.log('Button text is ', buttonText);//button pe click krne se sare button text aa rhe h
        if(buttonText=='x'){
            buttonText='*';
            screenValue += buttonText;
            screen.value=screenValue;
        }
        else if(buttonText=='C'){
            screenValue=' ';
            screen.value= screenValue;
        }
        else if(buttonText=='='){
            screen.value=eval(screenValue);
        }
        else{
            screenValue +=buttonText;
            screen.value=screenValue;
        }

    });
    let cbtn=document.getElementById('clearBtn');
    cbtn.addEventListener('click', (e)=>{
        e.target.className +=' cBtn';
        console.log('Clear button has been fired.')
    });
};