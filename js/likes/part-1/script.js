var count = 3;
var countElement = document.querySelector(".likes");

function cnt(element){
    count++;
    countElement.innerHTML = count + " likes(s)"
}