likes = [9,12,9];
var count = [
    document.querySelector(".likes-1"),
    document.querySelector(".likes-2"),
    document.querySelector(".likes-3")
];

function cnt(index){
    likes[index]++;
    count[index].innerText  = likes[index] + " like(s)" 
}