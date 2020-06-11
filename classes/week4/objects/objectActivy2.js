let favoriteSongs = ['song1', 'song2', 'song3', 'song4', 'song5'];

myObject = favoriteSongs;

console.log(myObject);  // to use as reference

//or 

myOtherObject = {        // to actually make a copy of it.
    ...favoriteSongs
};

console.log(myOtherObject);