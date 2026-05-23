fetch("https://darth-ness.github.io/my-website/pages.html")
    .then((response) => response.text())
    .then((data) => document.getElementById("pages").innerHTML = data);
