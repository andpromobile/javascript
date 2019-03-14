function panggilBilanganGanjil() {
  var BilanganGanjil = [];

  for (var i = 1; i < 30; i++) {
    if (i % 2 !== 0) {
      BilanganGanjil.push(i);
    }
  }

  return BilanganGanjil;
}

console.log(panggilBilanganGanjil());
