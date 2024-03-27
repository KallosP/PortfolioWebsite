// window.onload = waits for the window to fully load, then executes the javascript code
window.onload = function () {
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
}