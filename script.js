$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });


    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });


    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

 
    var typed = new Typed(".typing", {
        strings: ["Student at SSA", "Coding Noob", "Science Olympiad Captain", "Physics Enthusiast", "Biology :D"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student at SSA", "Coding Noob", "Science Olympiad Captain", "Physics Enthusiast", "Biology :D"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
 // Get the modal
    var modal = document.getElementById('myModal');
// Get the main container and the body
    var body = document.getElementsByTagName('body');
    var container = document.getElementById('myContainer');
// Get the open button
    var btnOpen = document.getElementById("myBtn");
// Get the close button
    var btnClose = document.getElementById("closeModal");    
    btnOpen.onclick = function() {
        modal.className = "Modal is-visuallyHidden";
        setTimeout(function() {
          container.className = "MainContainer is-blurred";
          modal.className = "Modal";
        }, 100);
        container.parentElement.className = "ModalOpen";
    }
    // Close the modal
    btnClose.onclick = function() {
        modal.className = "Modal is-hidden is-visuallyHidden";
        body.className = "";
        container.className = "MainContainer";
        container.parentElement.className = "";
    }
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.className = "Modal is-hidden";
            body.className = "";
            container.className = "MainContainer";
            container.parentElement.className = "";
        }
    }   
});