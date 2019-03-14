function balikKata(kata) {
var hasil = "";

for (var i = 0; i < kata.length; i++) {
  hasil += kata[kata.length-1-i];
}

 return hasil;
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))
