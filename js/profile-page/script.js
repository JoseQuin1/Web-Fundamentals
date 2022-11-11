var name = "River Phoenix";
var userName = document.querySelector(".card-h2");

function nameChange(element){
    if(userName.innerText == 'Jane Doe'){
        userName.innerText = name;
    }else{
        userName.innerText = 'Jane Doe';
    }
}


var conn = document.querySelector(".connection");
var add = document.querySelector(".conn1");

function accept(id){
    var hide = document.querySelector(id);
    hide.remove();
    conn.innerText--;
    add.innerText++;
}

function ignore(id){
    var hide = document.querySelector(id);
    hide.remove();
    conn.innerText--;
}
