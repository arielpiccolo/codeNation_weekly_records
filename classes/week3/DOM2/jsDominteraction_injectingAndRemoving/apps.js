const input = document.getElementById("input");
const button = document.getElementById("submit");
let list = document.getElementsByTagName("ul")[0];
let showhidenbtn = document.getElementById("showhide-btn");


button.addEventListener("click", ()=> {
 let listItem = document.createElement("li");
 listItem.textContent = input.value;
 list.appendChild(listItem);
 input.value = ('');
 //console.log(listItem);
})



