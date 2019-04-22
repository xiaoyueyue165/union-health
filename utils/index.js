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
