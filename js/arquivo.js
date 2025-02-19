var p = document.getElementById("id_p");
console.log(p);

window.onload = function () {
  var p = document.getElementById("id_p");
  console.log(p);
  p.style.backgroundColor = "#0087FF";

  var links = p.getElementsByTagName("a");

  alert(links[0].href);
};

// myFunc () {
  
// }