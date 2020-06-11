// scope chain

let name = 'Ariel'       // <-- glonal scope variable   /  accesable from everywere

                        

function greeting() {
    

   // whatever is in the function block only exist inside the block

    let name = 'John';  //  <--   block scope variable (inside the funtion block) including any sub- function 
    console.log(name);




    function goodBye() {    // <-- this is a function whitin a function
        console.log(name)
        let whatever = 'whatever more'  // <--this varialble is in the scope of the goodbye function
    }

    goodBye();

}



greeting();