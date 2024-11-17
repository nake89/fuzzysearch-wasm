const {fuzzysearch} = require("./pkg/hello_wasm")
console.log(fuzzysearch("ahb", "ahbgdc")); // true
console.log("Next should be true")
console.log(fuzzysearch('twl', 'cartwheel')); // <- true
console.log(fuzzysearch('cart', 'cartwheel')); // <- true
console.log(fuzzysearch('cw', 'cartwheel')); // <- true
console.log(fuzzysearch('ee', 'cartwheel')); // <- true
console.log(fuzzysearch('art', 'cartwheel')); // <- true
console.log(fuzzysearch('eeel', 'cartwheel')); // <- false
console.log(fuzzysearch('dog', 'cartwheel')); // <- false
