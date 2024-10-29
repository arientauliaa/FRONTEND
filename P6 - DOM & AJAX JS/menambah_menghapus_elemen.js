// Menambah Elemen
var div = document.createElement('div');

var newContent = document.createTextNode("Hello World!");
div.appendChild(newContent);
document.body.insertBefore(div, currentDiv);

// Menghapus Elemen
var elem = document.querySelector('#footer');
elem.parentNode.removeChild(elem)

// Mengganti Elemen
var div = document.querySelector('#div');
var newDiv = document.createElement('div');

newDiv.innerHTML = "Hello World2";
div.parentNode.replaceChild(newDiv, div);
