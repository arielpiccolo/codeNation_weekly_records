
// set a function that will return true if n is prime
function isPrime(n) 
{
    // Check if n is less than 2, if so = not prime
    if (n<2) console.log(false);

    // calculate 2 to square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) 
        // If i is a divisor of n, n is not prime
        if (n % i == 0) console.log(false);
    // prime number are the ones that are divisible by 1 and by itself, exept 1.
    console.log(true);
}

isPrime(3)
isPrime(1)
isPrime(213)
isPrime(37)