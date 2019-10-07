import $ from 'jquery';

function component() {
  var element = $("<div></div>");
  element.html("Hello webpack");

  return element[0];
}

document.body.appendChild(component());