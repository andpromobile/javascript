function panggilNestedArray(value){
var hasil = [];

 for (var i = 0; i < value[0].length; i++) {
  hasil.push([value[0][i], value[1][i], value[2][i]]);
 }

console.log(hasil);
}

var nestedArray = [
  [1,2,3,4],
  ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
  ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

console.log(nestedArray[0].length);

panggilNestedArray(nestedArray)
