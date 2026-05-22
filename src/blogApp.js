/*fetch("https://darth-ness.github.io/my-website/blogPages/pages.html")
    .then((response) => response.text())
    .then((data) => document.getElementById("pages").innerHTML = data);

*/
//Since there is nothing on the GitHub repo, this is used as a test for now
var data = `
    <h3><a class="purple" href="blogPages/post1.html">Addons I use</a></h2>
    <p> 1/28/2025</p>`
document.getElementById("pages").innerHTML = data;
