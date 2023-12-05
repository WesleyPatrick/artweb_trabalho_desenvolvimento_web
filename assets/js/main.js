/*=============== APARECER MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
  
        nav.classList.toggle('aparecer-menu')
 
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu')



/*=============== CARROSSEL IMG ===============*/
 document.addEventListener('DOMContentLoaded', function () {
    var carrossel = document.querySelector('.carrossel-inner');
    var images = document.querySelectorAll('.carrossel-item');
    var indicators = document.querySelectorAll('.carousel-indicator');

    var currentIndex = 0;

    function showImage(index) {
        carrossel.style.transform = 'translateX(' + (-index * 100) + '%)';
        indicators.forEach(function (indicator, i) {
            indicator.classList.toggle('active', i === index);
        });
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    var intervalId = setInterval(showNextImage, 5000);

    indicators.forEach(function (indicator, i) {
        indicator.addEventListener('click', function () {
            clearInterval(intervalId);
            currentIndex = i;
            showImage(currentIndex);
        });
    });
});


/*=============== MODAL ===============*/
document.addEventListener("DOMContentLoaded", function() {
    var galleryImages = document.querySelectorAll(".section-4-galery img");

    galleryImages.forEach(function(img, index) {
      img.addEventListener("click", function() {
        // Exiba o modal
        document.getElementById("myModal").style.display = "block";

        document.getElementById("modalImage").src = this.src;
  
        document.querySelector(".close").addEventListener("click", function() {

          document.getElementById("myModal").style.display = "none";
        });
      });
    });
  });