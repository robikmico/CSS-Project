// JavaScript for image modal functionality
document.addEventListener("DOMContentLoaded", function () {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");
    var images = document.querySelectorAll(".gallery img");
    var span = document.getElementsByClassName("close")[0];

    images.forEach(function (image) {
        image.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});