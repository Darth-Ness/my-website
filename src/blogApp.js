fetch("pages.html")
    .then((response) => response.text())
    .then((data) => document.getElementById("pages").innerHTML = data);
