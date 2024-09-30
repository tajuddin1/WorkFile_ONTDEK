
    var hamburger = document.getElementById("hamburger");
    var menu = document.querySelector(".menu");
    var body = document.querySelector(".body");
    hamburger.addEventListener('click', function(){
        this.classList.toggle('is-active');
        menu.classList.toggle('show');
        body.classList.toggle('no-scroll');
    })
