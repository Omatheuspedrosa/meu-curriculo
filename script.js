document.getElementById("tema").addEventListener("click", function() {
    var corAtual = document.body.style.backgroundColor;
    if (corAtual === "black") {
        document.body.style.backgroundColor = "white";

        var textos = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a");
        for (var k = 0; k < textos.length; k++) {
            textos[k].style.color = ""; 
        }

    } else {
        document.body.style.backgroundColor = "black";
        var textos = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, li, a");
        for (var i = 0; i < textos.length; i++) {
            textos[i].style.color = "white";
        }
    }
});
