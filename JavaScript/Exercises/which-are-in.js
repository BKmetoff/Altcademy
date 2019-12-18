// https://www.codewars.com/kata/550554fd08b86f84fe000a58


// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// a1 = ["xyz", "live", "strong"]
// Test.assertSimilar(inArray(a1, a2), ["live", "strong"])

// a1 = ["live", "strong", "arp"]
// Test.assertSimilar(inArray(a1, a2), ["arp", "live", "strong"])

// a1 = ["tarp", "mice", "bull"]
// Test.assertSimilar(inArray(a1, a2), [])


var a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
var a1 = ["live", "strong", "arp"];



var inArray = function (array1, array2) {

  var result = array1.map (function (elementOfArr1) {

    return elementOfArr1

  })
  return result;
}

console.log (inArray(a1, a2))



// function inArray(array1,array2) {
//   var result = [];

//   for (var i = 0; i < array1.length; i++) {

//     for (var j = 0; j < array2.length; j++) {

//       if (array2[j].includes(array1[i]) && !(result.includes(array1[i])) ) {
//         result.push(array1[i])
//       }
//     }
//   }
//   return result.sort();
// }

// console.log (inArray(a1, a2))
