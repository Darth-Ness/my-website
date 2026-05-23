if(window.location.href.indexOf("post") == -1) {  var url="banner.html"  }
else {  var url = "../banner.html"  }
fetch("banner.html")
    .then((response) => response.text())
    .then((data) => document.getElementById("banner").innerHTML = data);

