let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
console.log(buttons)

let string = "";
let arr = Array.from(buttons);   
console.log(arr);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        console.log('String: '+string);
        console.log('Clicked: '+e.target.innerHTML);
        if(e.target.innerHTML == '='){
            string = eval(string);   //calculate
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){    //all clear
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0,string.length-1);  //deleting the digit
            input.value = string;
        }
        else if(e.target.innerHTML == '*' || e.target.innerHTML == '-' || e.target.innerHTML == '+' || e.target.innerHTML == '/' || e.target.innerHTML == '%'){
            var firstDigit = string.substring(string.length-1);
            if(firstDigit == '*' || firstDigit == '/' || firstDigit == '+' || firstDigit == '-' || firstDigit == '%'){
                string = string.substring(0,string.length-1); 
                string += e.target.innerHTML;
                input.value = string;
            }else{
                string += e.target.innerHTML;
                input.value = string;
            }
        }
        else{
            string += e.target.innerHTML; //concatination of the inputs   ex - string=89, innerHtml=*, input.value=89*
            input.value = string;
        }
    })
})