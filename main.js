// window.onload = waits for the window to fully load, then executes the javascript code
window.onload = function () {


    /* Cursor trail by https://www.youtube.com/@codemorphism */
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#1cff86", "#11fd7f", "#07fa79", "#07ee72", "#08df6d", "#0ad167", "#0bc361", "#0cb55b", "#0da855", "#0e9a4f", "#0e8d49", "#0e8043",
        "#0e8043", "#0d743d", "#0b6937", "#0a5d31", "#09512b", "#084625", "#063a1e", "#052f18", "#042312", "#03170c", "#010c06", "#000000"

    ];

    circles.forEach(function (circle, index) {
        circle.x = 0;
        circle.y = 0;
        circle.style.backgroundColor = colors[index % colors.length];
    });

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function animateCircles() {

        let x = coords.x;
        let y = coords.y;

        circles.forEach(function (circle, index) {
            circle.style.left = x - 12 + "px";
            circle.style.top = y - 12 + "px";

            circle.style.scale = (circles.length - index) / circles.length;

            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.3;
            y += (nextCircle.y - y) * 0.3;
        });

        requestAnimationFrame(animateCircles);
    }

    animateCircles();

    // A reference to all elements with input-field class
    var inputField = document.getElementsByClassName('input-field');

    // Add event listeners to all elements
    for (var i = 0; i < inputField.length; ++i) {

        // Remove the pulseBox class from all elements with input-field class
        inputField[i].addEventListener('focus', function () {
            this.classList.remove('pulseBox')
            this.style.backgroundColor = '#131313';
        });

        // Re-add the pulseBox class
        inputField[i].addEventListener('blur', function () {
            this.classList.add('pulseBox')
            this.style.backgroundColor = 'rgba(28, 255, 134, 0.151)';
        });

    }

    // Alert for redirect on message submission
    document.getElementById('form').addEventListener('submit', function (e) {
        setTimeout(function () {
            alert("Redirecting for a quick security check. Afterwards, a confirmation will be provided if your message was sent. \n\nThanks for your patience!");
        }, 500);
    });
}