let items = document.getElementById("items");
let enter = document.getElementById("enter");
let ul = document.querySelector("ul");

function createList(){
    if(items.value == ''){
        alert('item is empty');
    }else{
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(items.value));
    ul.appendChild(li);
    li.addEventListener("click",finished);
    items.value = '';

    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode("X"));
    li.appendChild(btn);
    btn.addEventListener("click",deleteItem);

    function finished(){
        li.classList.toggle("finish");
    }
    function deleteItem(){
        li.classList.add("delete");
    }
}
}

enter.addEventListener("click",createList);