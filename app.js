let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '=')
        {
            // HERE WE ARE CHECKING IF THE INPUT VALUE LENGTH IS LESS THAN ZERO (0) THEN, WE WILL SHOW 0 IN THE INPUT BOX
            if(input.value.length == 0)
            {
                string = 0;
                input.value = string;
            }
            else
            {
                string = eval(string);
                input.value = string;
            }
        } 
        else if(e.target.innerHTML == 'AC')
        {
            // THIS CODE WILL CLEAR ALL THE INPUTTED VALUES FROM THE INPUT BOX
            string = '';
            input.value = string;
        }   
        else if(e.target.innerHTML == 'DEL')
        {
            // ON CLICKING DEL BUTTON, THIS CODE WILL EXECUTE AND DELETE THE LAST INPUTTED VALUE FROM RIGHT SIDE OF THE INPUT BOX 
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else
        {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})