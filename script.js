document.addEventListener("mouseup", function() {
    var selection = window.getSelection().toString();

    if (selection.length > 0) {
        alert(selection);
    }
});