function panggilSplice() {
  var kota = ["Jakarta", "Bandung", "Malang", "Banjarmasin"];
  console.log(kota);

  kota.splice(2, 2);
  //param1 = posisi/index elemen
  //param2 = 0:false (jangan hapus); 1:true (hapus);
  //param3 = elemen baru yang ditambahkan

return kota;
}

console.log(panggilSplice());
