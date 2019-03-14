function tipeData() {
  var data = "Jakarta";
  console.log(typeof(data));

  if(data === "jakarta"){
    return data;
  }else {
    return 'gagal';
  }
}

console.log(tipeData());
