import $ from 'jquery';
import utils from "./utils/index";
import "./styles/hello.css";
import "./styles/world.scss";
import "./styles/dashazi.less";
import helloPath from './images/1.jpg';


function component() {
  var element = $("<div></div>");
  element.html("Hello webpack");

  return element[0];
}



document.body.appendChild(component());

let url = 'http://www.baidu.com?name=zhangsan&age=18';
console.log(utils.getQuery(url));

let imgEl = document.createElement('img');
imgEl.src = helloPath;
document.body.appendChild(imgEl);
