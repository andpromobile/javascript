function panggilSplice() {
  var kota = ["Jakarta", "Bandung", "Malang", "Banjarmasin"];
  console.log(kota);

  kota.splice(2, 0, "Marabahan");

return kota;
}

console.log(panggilSplice());
