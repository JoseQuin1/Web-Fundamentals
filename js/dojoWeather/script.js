function changeTemp(id){
    for(var i = 1;  i <= 8;  i++){
        var temp = "#tmp"+i;
        var tempValue = document.querySelector(temp);
        if(id.value == "°F"){
            if(temp == "#tmp1"){
                tempValue.innerText = "75°";
            }else if(temp == "#tmp2"){
                tempValue.innerText = "65°";
            }else if(temp == "#tmp3"){
                tempValue.innerText = "80°";
            }else if(temp == "#tmp4"){
                tempValue.innerText = "66°";
            }else if(temp == "#tmp5"){
                tempValue.innerText = "69°";
            }else if(temp == "#tmp6"){
                tempValue.innerText = "61°";
            }else if(temp == "#tmp7"){
                tempValue.innerText = "78°";
            }else if(temp == "#tmp8"){
                tempValue.innerText = "70°";
            }            
        }
    }
}


function remove(id){
    var hide = document.querySelector(id);
    hide.remove();
}