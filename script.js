document.getElementById("tema").addEventListener("click", function() {
    var corAtual = document.body.style.backgroundColor;
    if (corAtual === "gray") {
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "gray";
    }
});

