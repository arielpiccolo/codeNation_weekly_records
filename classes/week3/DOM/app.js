console.log("testing connection from  app.js file");



let heading = document.getElementById("myTitle");

document.getElementById("myTitle").style.color = "red";


heading.style.fontSize = "3rem";

heading.addEventListener("click", () => {
    heading.style.color = "blue";
    heading.style.fontWeight = "bold";
    heading.style.fontFamily = "Arial";
    heading.style.fontSize = "5rem";

})