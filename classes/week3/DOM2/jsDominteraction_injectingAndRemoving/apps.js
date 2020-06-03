//setting up variables
const input = document.getElementById("input");
const button = document.getElementById("submit");

let list = document.getElementsByClassName("ul")[0];



button.addEventListener("click", ()=> {
    let listItem = document.createElement("li");
    listItem.textContent = input.value;
    
 //console.log(listItem);
})


console.log("testing page connnection");
