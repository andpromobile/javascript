function panggilRegexp(value) {
   if ((/javascript/.test(value)) || (/php/.test(value))) {
     console.log("Belajar");
   }else {
     console.log(value);
   }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");

panggilRegexp("Belajar php");
