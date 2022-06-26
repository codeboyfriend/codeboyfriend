let homeBtn = document.querySelector('.home'),
    modal = document.querySelector('.modal'),
    slide = document.querySelector('.slide'),
    msg = document.querySelector('.msg'),
    instagram = document.querySelector('.instagram'),
    github = document.querySelector('.github'),
    twitter = document.querySelector('.twitter'),
    watsapp = document.querySelector('.watsapp');

homeBtn.addEventListener('click', () => {
    homeBtn.classList.toggle('active');
    toggleBtn();
    // homeBtn.classList.add('fa-solid fa-xmark');
    if (homeBtn.classList.contains('active')) {
        modal.style.transform = 'translateX(-300px)';
        slide.style.transform = 'translateX(0px)';
        msg.style.opacity = 1;
    }else {
        modal.style.transform = 'translateX(0px)';
        slide.style.transform = 'translateX(1400px)';
        msg.style.opacity = 0;
        // homeBtn.innerHTML = '<i class="fa-solid fa-circle-dot"></i>';
    }
})

function toggleBtn() {
    instagram.classList.toggle('left');
    github.classList.toggle('top');
    twitter.classList.toggle('right');
    watsapp.classList.toggle('bottom');
}