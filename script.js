const button = document.querySelector(".submit");
const list = document.querySelector(".list");
const input = document.querySelector("#input");
const check_Btn = document.querySelector(".check_Btn");
const trash_Btn = document.querySelector(".trash_Btn");
const select = document.querySelector("select");
list.addEventListener("click", deleteItem);
button.addEventListener("click", addItem);
select.addEventListener("click", filterFunc);
function addItem(event) {
    event.preventDefault();
    const newListItem = document.createElement("div");
    newListItem.classList.add("list_Item");
    const newLi = document.createElement("li");
    newLi.innerText = input.value;
    input_value = input.value;
    newListItem.appendChild(newLi);
    input.value="";
    const checkBtn = document.createElement("button");
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`;
    checkBtn.classList.add("check_Btn");
    newListItem.appendChild(checkBtn);
    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    trashBtn.classList.add("trash_Btn");
    newListItem.appendChild(trashBtn);
    list.appendChild(newListItem);
}
function deleteItem(evenet) {
    const target = evenet.target;
 if(target.classList[0] === "check_Btn") {
    const item = target.parentElement;
    item.classList.toggle("complete");
 }
 if(target.classList[0] === "trash_Btn") {
     const item = target.parentElement;
     item.classList.add("fall");
     item.addEventListener("transitionend", ()=> {
        item.remove();
     });
}
}
function filterFunc(event) {
    let listItems = list.childNodes;
    console.log(listItems);
    listItems.forEach(function(listItem) {
        switch(event.target.value) {
            case"All":
                listItem.style.display = "flex";
                break;
            case"Completed":
                if(listItem.classList.contains("complete"))
                    listItem.style.display = "flex";
                else
                    listItem.style.display = "none";
                break;
            case "Uncompleted":
                if(!listItem.classList.contains("complete"))
                    listItem.style.display = "flex";
                else
                    listItem.style.display = "none";
                break;
        }
    });
}