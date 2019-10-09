var modal = document.getElementById("modal-window");
var btn = document.getElementById("MyBtn");

btn.onclick = function () {
    modal.style.display = "block";

}

window.onclick = function (event) {
    if (event.target == modal){
        modal.style.display = "none";
    }
}
