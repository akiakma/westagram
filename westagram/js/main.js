let button3Click = document.getElementsByClassName("button3")[0];
let element01 = document.getElementsByClassName("reply")[0];
let input_value = document.getElementsByClassName("button2")[0];


button3Click.addEventListener('click', function(event){


    let spanMake = document.createElement('span');
    spanMake.className = "text2"; 
    let divMake = document.createElement('div');
    divMake.className ="text0";

    let spanMake2 = document.createElement('span');
    spanMake2.className = "text1";
    
    spanMake2.innerHTML="gogobook";
    spanMake.innerHTML = input_value.value;
    divMake.appendChild(spanMake2);
    divMake.appendChild(spanMake);

    element01.appendChild(divMake);


    


})