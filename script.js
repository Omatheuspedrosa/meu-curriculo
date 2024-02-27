document.getElementById("tema").addEventListener("click", function() {
    var corAtual = document.body.style.backgroundColor;
    if (corAtual === "black") {
        document.body.style.backgroundColor = "white";

        var paragrafos = document.querySelectorAll("p");
        for (var k = 0; k < paragrafos.length; k++) {
            paragrafos[k].style.color = ""; 
        }

        var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, a");
        for (var l = 0; l < headings.length; l++) {
            headings[l].style.color = ""; 
        }
    } else {
        document.body.style.backgroundColor = "black";
        var paragrafos = document.querySelectorAll("p");
        for (var i = 0; i < paragrafos.length; i++) {
            paragrafos[i].style.color = "white";
        }
        var headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6, li, a");
        for (var j = 0; j < headings.length; j++) {
            headings[j].style.color = "white";
        }
    }
});

