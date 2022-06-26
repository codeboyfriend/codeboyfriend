let btn = document.querySelector('.btn'),
    home = document.querySelector('.home'),
    modal = document.querySelector('.modal'),
    slide = document.querySelector('.slide'),
    msg = document.querySelector('.msg'),
    instagram = document.querySelector('.instagram'),
    github = document.querySelector('.github'),
    twitter = document.querySelector('.twitter'),
    watsapp = document.querySelector('.watsapp');

btn.addEventListener('click', () => {
    toggleBtn();
    msg.classList.toggle('active')
    if(msg.classList.contains('active')) {
        modal.style.display = 'none';
        slide.style.display = 'block';
        home.classList.add('fa-xmark');
        home.classList.remove('fa-circle-dot')
        btn.style.backgroundColor = '#bb93fc';
        btn.style.color = '#fff';
    }else {
        modal.style.display = 'block';
        slide.style.display = 'none';
        btn.style.backgroundColor = '#fff';
        btn.style.color = '#151515';
        home.classList.remove('fa-xmark');
        home.classList.add('fa-circle-dot')
    }
});

function toggleBtn() {
    instagram.classList.toggle('left');
    github.classList.toggle('top');
    twitter.classList.toggle('right');
    watsapp.classList.toggle('bottom');
};