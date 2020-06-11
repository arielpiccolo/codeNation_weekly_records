const player = {
    name: 'steerling',
    age: 24,
    play: function() {
      console.log(`I am player for Manchester`)
      
    },
    get fetchName() {             // <--  getters example
      console.log(`my name is ${this.name}`);
    },
    set updateAge(newAge) {      // <-- setters example
      this.age = newAge;
    }
    
     
  }
  
  player.play()
  player.fetchName;
  player.updateAge = 34;
  
  console.log(player.age);