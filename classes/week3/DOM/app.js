console.log("testing connection from  app.js file");



let heading = document.getElementById("myTitle");

//document.getElementById("myTitle").style.color = "red";


heading.style.fontSize = "3rem";

heading.addEventListener("click", () => {
    heading.style.color = "blue";
    heading.style.fontWeight = "bold";
    heading.style.fontFamily = "Arial";
    heading.style.fontSize = "5rem";

});



document.getElementsByTagName("ul")[0].innerHTML = "<li>Sprite</li>";





// to change text
//document.querySelector("#myTitle").textContent = "caca caca";



//console.log(document.querySelector(".one"));

//console.log(document.querySelectorAll(".one")[2]);




// querySelector are universal collectors, can be used with tag,id,classes

//console.log(document.querySelector("#myTitle"));

//console.log(document.querySelector("h1"));

//---------------------------------------------------




/*
selecting using getElementByTag, Id eyc

console.log(document.getElementsByTagName("li"));

console.log(document.getElementsByTagName("li")[0]);


console.log(document.getElementsByTagName("p")[1]);

console.log(document.getElementsByClassName("one")[0]);
*/