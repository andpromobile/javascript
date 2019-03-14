function panggilPerintahMap() {
  var data = ['Aceh', 'Bandung', 'Ciamis', 'Denpasar', 'Padang'];

  data.map((item, index, array)=>{
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilPerintahMap();
