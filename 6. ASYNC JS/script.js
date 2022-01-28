/* Synchronous JS

console.log("Start");

for( i = 0; i < 5000; i++) {
    console.log("Looping");
}

console.log("End");
*/


// Asynchronous JS

console.log("Start");

// setTimeout(callBackFunction, time)

setTimeout( function() {
    console.log("Timeout Function");
    }, 5000)

console.log("End");