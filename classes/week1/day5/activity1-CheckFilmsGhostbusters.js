
let films = ['Die Hard','The God Pather', 'Ghostsbusters', 'Shawn of the Dead'];

const weWantToWatch = "yey it Ghostsbusters!";

for (let i = 0;i < films.length; i++) {
    console.log(films[i]);
} 

function filmCheck() {
  if (films[2] == "Ghostsbusters") {
    console.log(weWantToWatch);
} else {
    console.log("boooo we want ghostsbusters!");
    
  }
}  
filmCheck();