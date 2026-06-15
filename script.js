//your JS code here. If required.
let level = 1;
function getDOMlevel(element){
    while(element.parentElement){
        level++;
        element = element.parentElement;
    }
    return level;
}

let element = document.getElementById('level');
let n = getDOMlevel(element);
alert('The level of the element is: ' + n);