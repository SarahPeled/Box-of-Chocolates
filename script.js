// JavaScript to "deactivate" the hover after one animation
document.addEventListener('DOMContentLoaded', function() {
    var lid = document.querySelector('#box-lid');
    var animationPlayed = false; // flag to store if the animation has played

    lid.addEventListener('animationend', function() {
        if (!animationPlayed) {
            // If the animation has played once, set the flag
            animationPlayed = true;
            // Remove the hover effect by changing the class or style
            lid.style.animation = 'none'; // This will make the animation not apply again
        }
    });
});