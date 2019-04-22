function openUrl(url) {
  var a = document.createElement("a");
  a.target = "_self";
  a.href = url;
  a.style.display = "none";
  var body = document.getElementsByTagName("body").item(0);
  body.appendChild(a);
  a.click();
  body.removeChild(a);
}

function toTop() {
  window.scrollTo(0, 0);
}
/**
 *
 *
 * @param {*} a dom 元素
 * @param {*} b 事件类型 click change scroll
 * @param {*} c function
 * @param {*} d  参数默认false=》冒泡，true为捕获
 */
function on(a, b, c, d) {
  a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent("on" + b, c);
}
// removeEvent(objOverLay, 'click', eMsgClose)
function remove(a, b, c, d) {
  a.removeEventListener
    ? a.removeEventListener(b, c, d)
    : a.detachEvent("on" + b, c);
}

function setStyle(ele, styleObj) {
  for (var i in styleObj) {
    ele.style[i] = styleObj[i];
  }
}

function $(selector, el) {
  if (!el) {
    el = document;
  }
  return el.querySelector(selector);
}

function $$(selector, el) {
  if (!el) {
    el = document;
  }
  return Array.prototype.slice.call(el.querySelectorAll(selector));
}
