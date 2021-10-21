document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 159) {
            document.getElementById('main-menu').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.main_menu-container').offsetHeight;
            document.querySelector('.wrapper').style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('main-menu').classList.remove('fixed-top');
            // remove padding top from body
            document.querySelector('.wrapper').style.paddingTop = '0';
        }
    });
  });
