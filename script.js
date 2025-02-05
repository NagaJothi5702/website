document.getElementById('playButton').addEventListener('click', function () {
    const videoIframe = document.getElementById('videoIframe');
    const playButton = document.getElementById('playButton');
    const videoCover = document.querySelector('.video-cover');

    // Show the video and hide the play button and cover image
    videoIframe.style.display = 'block';
    playButton.style.display = 'none';
    videoCover.style.display = 'none';

    // Autoplay the video
    const videoSrc = videoIframe.getAttribute('src');
    videoIframe.setAttribute('src', videoSrc + '&autoplay=1');
});


$(document).ready(function () 
{
    $('.customer-carousel').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
    });
});

document.getElementById("newsletter-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email) {
      alert(`Thank you for signing up, ${email}!`);
    } else {
      alert("Please enter a valid email address.");
    }
  });





    $(document).ready(function(){
        $('.dress-carousel').slick({
            lazyLoad: 'ondemand',  // Lazy load images when needed
            slidesToShow: 3,       // Show 3 cards at a time
            slidesToScroll: 1,     // Scroll 1 card at a time
            arrows: true,          // Enable arrows for navigation
            prevArrow: '<button type="button" class="slick-prev">←</button>',
            nextArrow: '<button type="button" class="slick-next">→</button>',
            dots: false,           // Disable dots navigation
            infinite: true,        // Infinite loop when reaching the end
            responsive: [
                {
                    breakpoint: 768, // For screens smaller than 768px
                    settings: {
                        slidesToShow: 1, // Show 1 card at a time
                        slidesToScroll: 1,
                        arrows: true,    // Keep arrows on smaller screens
                    }
                }
            ]
        });
    });







  










