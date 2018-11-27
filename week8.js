var box= document.querySelector("#box")

window.addEventListener("mousemove", function(e)) {
    box.style.left = e.x + "px"
    box.style.top = e.y + "px"
})
