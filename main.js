// window.onload = waits for the window to fully load, then executes the javascript code
window.onload = function () {


    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");

    const colors = [
        "#ffb56b",
        "#fdaf69",
        "#f89d63",
        "#f59761",
        "#ef865e",
        "#ec805d",
        "#e36e5c",
        "#df685c",
        "#d5585c",
        "#d1525c",
        "#c5415d",
        "#c03b5d",
        "#b22c5e",
        "#ac265e",
        "#9c155f",
        "#950f5f",
        "#830060",
        "#7c0060",
        "#680060",
        "#60005f",
        "#48005f",
        "#3d005e"
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

/*$(document).ready(function(){
    jQuery(function($) {
    $('.bg-aura-effect').mouseenter(function() {
      // Add the aura element on hover
      $(this).append('<div class="aura-element"></div>');
    }).mousemove(function(e) {
      // Move the aura element to follow the pointer
      let x = e.clientX - this.getBoundingClientRect().left;
      let y = e.clientY - this.getBoundingClientRect().top;
      $(this).find('.aura-element').css({ top: y, left: x });
    }).mouseleave(function() {
      // Remove the aura element when leaving the element
      $(this).find('.aura-element').remove();
    });
  });
});*/
