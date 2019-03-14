var arr = [1, 2, 3, 4, 5];

var arrGanjil = arr.filter(function(el){
  return el % 2 !== 0
});

console.log(arrGanjil);

function panggilFilter() {
 var arr = [
   {negara: 'Indonesia', benua: 'Asia'},
   {negara: 'Jerman', benua: 'Eropa'},
   {negara: 'Spanyol', benua: 'Eropa'},
   {negara: 'Korea', benua: 'Asia'},
   {negara: 'Portugal', benua: 'Eropa'},
   {negara: 'Amerika Serikat', benua: 'Amerika'},
 ];

 var benuaEropa = arr.filter(function(item) {
   return item.benua === 'Eropa';
 });

 return benuaEropa;
}

console.log(panggilFilter());
