let offer = 'none';
let time = 1200;

const cafe = {
    name: 'blacksheep',
    seats: 100,
    offers : true,
    drinks: ['capuccino', 'late', 'filter coffee', 'tea', 'hot chocolate'],
    lunchOffer: 'free drink with surprisingly priced sandwich',
    noOffer: 'Sorry no offers today',

    openCafe: ()=>{
        return 'we are open come on in'
    },

    closedCafe: ()=>{
        return 'sorry we are closed'
    },
};

console.log(cafe.openCafe())
console.log(cafe.closedCafe())

cafe.name
cafe.lunchOffer
cafe.drinks

// also a more modern version to call the key values

