document.addEventListener("DOMContentLoaded", function() {
    var runButton = document.getElementById("runButton");
    var outputDiv = document.getElementById("output");

    runButton.addEventListener("click", function() {
        var code = document.getElementById("input").value;

        try {
            var result = eval(code);
            outputDiv.innerHTML = "<pre>" + result + "</pre>";
        } catch (error) {
            outputDiv.innerHTML = "<pre style='color: red;'>Error: " + error.message + "</pre>";
        }
    });
});
