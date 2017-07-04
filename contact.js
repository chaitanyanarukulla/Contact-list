'use strict';
var filertinput = document.getElementById('filterInput');
filterInput.addEventListener('keyup', filtnerNames);

function filtnerNames() {
  var filterValue = document.getElementById('filterInput').value.toUpperCase();

  var ul = document.getElementById('names')
  var li = ul.querySelectorAll('li.collection-item');
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filertinput) > 1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}
