console.log('Jorge\'s Calculator');
let num1;
let num2;

function start(){
    num1 = Number(prompt('Enter the first number: '));
    num2 = Number(prompt('Enter a second number: '));

}
 

function sum(a, b){
    console.log(a, b);
    var sum = a + b;
    document.getElementById('calculation').innerHTML=`
        <p class="equation"><i>${a} + ${b} equals: </i></p>
        <div class="h3-div">
            <h3 class="result">${sum}</h3>
        </div>
    `;
}//end sum function

function sub(a, b){
    console.log(a, b);
    var subtract = a - b;
    document.getElementById('calculation').innerHTML=`
        <p class="equation"><i>${a} - ${b} equals: </i></p>
        <div class="h3-div">
            <h3 class="result">${subtract}</h3>
        </div>
    `;
}//end sub function

function mult(a, b){
    console.log(a, b);
    var multiple = a * b;
    document.getElementById('calculation').innerHTML=`
        <p class="equation"><i>${a} * ${b} equals: </i></p>
        <div class="h3-div">
            <h3 class="result">${multiple}</h3>
        </div>
    `;
}//end mult function

function division(a, b){
    console.log(a, b);
    var divi = a / b;

    if((a % b) === 0){
        document.getElementById('calculation').innerHTML=`
            <p class="equation"><i>${a} / ${b} equals: </i></p>
            <div class="h3-div">
                <h3 class="result">${divi}</h3>
            </div>
        `;
    }
    else{
        document.getElementById('calculation').innerHTML=`
            <p class="equation"><i>${a} / ${b} equals: </i></p>
            <div class="h3-div">
                <h3 class="result">${Math.floor(divi)}, <span class="remain"><sup><i>remainder</i></sup></span> ${a % b}</h3>
            </div>
        `;
    }
    
}//end division function

