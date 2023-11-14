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



document.addEventListener('DOMContentLoaded', function () {
    // Select all elements with the class 'piece'
    var pieces = document.querySelectorAll('.piece');

    // Add a mouseenter event listener to each piece
    pieces.forEach(function(piece) {
        piece.addEventListener('mouseenter', function() {
            // Check if the piece has the class 'green'
            if (piece.classList.contains('green')) {
                // Find the element with id 'saltedCaramel' and change its visibility
                var saltedCaramel = document.getElementById('saltedCaramel');
                saltedCaramel.style.visibility = 'visible';
                if (piece.id === 'choc1-1') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                } else if (piece.id === 'choc1-2') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                } else if (piece.id === 'choc1-3') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                }
            }
            else if (piece.classList.contains('red')) {
                var strawberryLiquorice = document.getElementById('strawberryLiquorice');
                strawberryLiquorice.style.visibility = 'visible';
                if (piece.id === 'choc3-1') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                } else if (piece.id === 'choc3-2') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                } else if (piece.id === 'choc3-3') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                }
            }
            else if (piece.classList.contains('silver')) {
                var whiteCoconut = document.getElementById('whiteCoconut');
                whiteCoconut.style.visibility = 'visible';
                if (piece.id === 'choc2-1') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                } else if (piece.id === 'choc2-2') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                } else if (piece.id === 'choc2-3') {
                    piece.style.transition = 'transform 0.3s';
                    piece.style.transform = 'rotate(-60deg)';
                }
            }
        });
        piece.addEventListener('mouseout', function() {
            // Check if the piece has the class 'green'
            if (piece.classList.contains('green')) {
                // Find the element with id 'saltedCaramel' and change its visibility
                var saltedCaramel = document.getElementById('saltedCaramel');
                saltedCaramel.style.visibility = 'hidden';
                if (piece.id === 'choc1-1') {
                    piece.style.transform = 'rotate(0deg)';
                } else if (piece.id === 'choc1-2') {
                    piece.style.transform = 'rotate(0deg)';
                } else if (piece.id === 'choc1-3') {
                    piece.style.transform = 'rotate(0deg)';
                }
            }
            else if (piece.classList.contains('red')) {
                var strawberryLiquorice = document.getElementById('strawberryLiquorice');
                strawberryLiquorice.style.visibility = 'hidden';
                if (piece.id === 'choc3-1') {
                    piece.style.transform = 'rotate(0deg)';
                } else if (piece.id === 'choc3-2') {
                    piece.style.transform = 'rotate(0deg)';
                } else if (piece.id === 'choc3-3') {
                    piece.style.transform = 'rotate(0deg)';
                }
            }
            else if (piece.classList.contains('silver')) {
                var whiteCoconut = document.getElementById('whiteCoconut');
                whiteCoconut.style.visibility = 'hidden';
                if (piece.id === 'choc2-1') {
                    piece.style.transform = 'rotate(0deg)';
                } else if (piece.id === 'choc2-2') {
                    piece.style.transform = 'rotate(0deg)';
                } else if (piece.id === 'choc2-3') {
                    piece.style.transform = 'rotate(0deg)';
                }
            }
        });
    });
});



