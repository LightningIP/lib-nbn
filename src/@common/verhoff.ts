/*
For more info on the algorithm: http://en.wikipedia.org/wiki/Verhoeff_algorithm
by Sergey Petushkov, 2014
*/

// multiplication table d
var d = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 0, 6, 7, 8, 9, 5],
    [2, 3, 4, 0, 1, 7, 8, 9, 5, 6],
    [3, 4, 0, 1, 2, 8, 9, 5, 6, 7],
    [4, 0, 1, 2, 3, 9, 5, 6, 7, 8],
    [5, 9, 8, 7, 6, 0, 4, 3, 2, 1],
    [6, 5, 9, 8, 7, 1, 0, 4, 3, 2],
    [7, 6, 5, 9, 8, 2, 1, 0, 4, 3],
    [8, 7, 6, 5, 9, 3, 2, 1, 0, 4],
    [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  ];
  
  // permutation table p
  var p = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 5, 7, 6, 2, 8, 3, 0, 9, 4],
    [5, 8, 0, 3, 7, 9, 6, 1, 4, 2],
    [8, 9, 1, 6, 0, 4, 3, 5, 2, 7],
    [9, 4, 5, 3, 1, 2, 6, 8, 7, 0],
    [4, 2, 8, 6, 5, 7, 3, 9, 0, 1],
    [2, 7, 9, 3, 8, 0, 6, 4, 1, 5],
    [7, 0, 4, 6, 9, 1, 3, 2, 5, 8]
  ];
  
  // inverse table inv
  var inv = [0, 4, 3, 2, 1, 5, 6, 7, 8, 9];
  
  // converts string or number to an array and inverts it
  export function invArray(array: number | string | (number | string)[]): (number)[] {
    if (typeof array === "number") {
      array = String(array);
    }
    if (typeof array === "string") {
      array = array.split("");
    }
    return array.reverse().map(Number);
  }
  
  // generates checksum
  export function generate(array: number) {
  
    var c = 0;
    var invertedArray = invArray(array);
  
    for (var i = 0; i < invertedArray.length; i++) {
      c = d[c][p[((i + 1) % 8)][invertedArray[i]]];
    }
  
    return inv[c];
  }
  
  // validates checksum
  export function validate(array: number) {
  
    var c = 0;
    var invertedArray = invArray(array);
  
    for (var i = 0; i < invertedArray.length; i++) {
      c = d[c][p[(i % 8)][invertedArray[i]]];
    }
  
    return (c === 0);
  }
  
  export default function validateAadhaar(aadhaarString: string) {
    if (aadhaarString.length != 12) {
      return new Error('Aadhaar numbers should be 12 digit in length');
    }
    if (aadhaarString.match(/[^$,.\d]/)) {
      return new Error('Aadhaar numbers must contain only numbers');
    }
    var aadhaarArray = aadhaarString.split('').map(Number);
  
    var toCheckChecksum = aadhaarArray.pop();

    const generateFrom = Number(aadhaarArray.join(''));
  
    if (generate(generateFrom) == toCheckChecksum) {
      return true;
    } else {
      return false;
    }
  };
