function panggilPop() {
  var kota = ["Jakarta", "Bandung", "Malang", "Banjarmasin"];

  console.log(kota);
  console.log("========");

  // kota = kota.shift();
  var kota2 = kota.pop();
  console.log(kota2);
  return kota;
}

console.log(panggilPop());
