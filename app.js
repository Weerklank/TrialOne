var elements = [];

function addElement() {
    if(document.querySelector(".addTxt").value.trim()!=""){
        elements.push(document.querySelector(".addTxt").value.trim());
        display();
    }
}

function display(){
    document.querySelector(".list").innerHTML = "";
    for(var i = 0; i < elements.length; i++)
    document.querySelector(".list").innerHTML += "<center><div class='element'>"+elements[i]+"<img class='tick' src='https://www.symbols.com/images/symbol/1/2320_check-mark.png' onclick='strike("+i+")'><img class='wastebasket' src='https://image.freepik.com/free-vector/illustration-trash-bin-icon_53876-5598.jpg' onclick='del("+i+")'></div></center>"
}

function del(index) {
    elements.splice(index, 1);
    display();
}

function strike(index) {
    if(elements[index].includes("<strike>")){
    elements[index] = elements[index].replace("<strike>" , "")
    elements[index] = elements[index].replace("</strike>" , "")
} else elements[index] = "<strike>"+elements+"</strike>"
display()
}