/*
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
*/

/*
// JavaScript to add .no-animation class after animation ends
document.addEventListener('DOMContentLoaded', function() {
    var lid = document.querySelector('#box-lid');

    lid.addEventListener('animationend', function() {
        console.log('hest')
        // Add the .no-animation class to #box-lid
        lid.classList.add('no-animation');
    });
});
*/


// Get the box lid element
var boxLid = document.getElementById('box-lid');

// Define the function to add the animation to the element
function triggerAnimation() {
    // Apply the CSS animation properties
    boxLid.style.animationName = 'open-box';
    boxLid.style.animationDuration = '2.5s';
    boxLid.style.animationDelay = '0.1s';
    boxLid.style.animationFillMode = 'forwards';
}

// Add the mouseover event listener to the box lid
boxLid.addEventListener('mouseover', triggerAnimation);