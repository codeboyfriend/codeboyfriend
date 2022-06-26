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
    if (homeBtn.classList.contains('active')) {
        modal.style.transform = 'translateX(-300px)';
        slide.style.transform = 'translateX(0px)';
        msg.style.opacity = 1;
        homeBtn.classList.add('fa-xmark');
        homeBtn.classList.remove('fa-circle-dot')
    }else {
        modal.style.transform = 'translateX(0px)';
        slide.style.transform = 'translateX(1400px)';
        msg.style.opacity = 0;
        homeBtn.classList.remove('fa-xmark');
        homeBtn.classList.add('fa-circle-dot')
    }
})

function toggleBtn() {
    instagram.classList.toggle('left');
    github.classList.toggle('top');
    twitter.classList.toggle('right');
    watsapp.classList.toggle('bottom');
}