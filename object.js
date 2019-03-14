function panggilObject() {
  var mobil = {
    type:"Sedan",
    harga: 50000,
    warna: "Putih",
    tahun: [2001, 2002, 2003, 2004]
  }

  console.log(mobil);
  console.log(mobil.harga);
  console.log(mobil.tahun);
  console.log(mobil.tahun[1]);
}

panggilObject();
