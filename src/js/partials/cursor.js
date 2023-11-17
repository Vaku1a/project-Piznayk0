const cursor = document.querySelector('.cursor');
let timeout;
// follow cursor on mousemove
document.addEventListener('mousemove', (evt) => {
    let x = evt.pageX;
    let y = evt.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // cursor effects on mouse stopped
    function mouseStopped() {
        cursor.style.display = "none";        
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 1000)
});

// cursor effect on mouseout
document.addEventListener('mouseout', () => {
    cursor.style.display = "none";
})