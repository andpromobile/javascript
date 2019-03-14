function panggilBilanganGenap() {
  var BilanganGenap = [];

  for (var i = 0; i < 10; i++) {
    if (i % 2 === 0) {
      BilanganGenap.push(i);
    }
  }

  return BilanganGenap;
}

console.log(panggilBilanganGenap());
