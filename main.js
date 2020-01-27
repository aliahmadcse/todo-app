var ul = document.getElementById("list");
var li;

var addButton = document.getElementById("add");
addButton.addEventListener("click", addItem);

var removeButton = document.getElementById("remove");
removeButton.addEventListener("click", removeItem);

var removeAllButton = document.getElementById("removeall");
removeAllButton.addEventListener("click", removeAll);

let isWarned = false;

function addItem() {
  let input = document.getElementById("input");
  let item = input.value;
  //ul=document.getElementById('list');
  let textNode = document.createTextNode(item);
  if (item === "" && !isWarned) {
    isWarned = true;
    let p = document.createElement("p");
    p.setAttribute("id", "warning");
    pText = document.createTextNode("Enter your todo");
    p.appendChild(pText);
    input.insertAdjacentElement("beforebegin", p);
    setTimeout(() => {
      let element = document.getElementById("warning");
      element.style.opacity = "0";
    }, 1500);
  } //end of if block
  else if (item === "") {
    let element = document.getElementById("warning");
    element.style.opacity = "1";
    setTimeout(() => {
      element.style.opacity = "0";
    }, 1500);
  } else if (item !== "") {
    let element = document.getElementById("warning");
    if (element) element.remove();
    //create li
    li = document.createElement("li");

    //create checkbox
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.setAttribute("id", "check");

    //create label
    let label = document.createElement("label");
    label.setAttribute("for", "item"); //optional

    ul.appendChild(li);
    li.appendChild(checkBox);
    label.appendChild(textNode); //textNode is the input value from input box
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]); //it will insert it in the begining of the list

    setTimeout(() => {
      li.className = "visual";
    }, 2);

    input.value = "";
  }
}

function removeItem() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    // while (li[index] && li[index].children[0].checked)
    //   ul.removeChild(li[index]);
    if (li[index] && li[index].children[0].checked) {
      ul.removeChild(li[index]);
      index--;
    }
  }
}

function removeAll() {
  li = ul.children;
  for (let index = 0; index < li.length; index++) {
    ul.removeChild(li[index]);
    index--;
  }
}
