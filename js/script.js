let openBtn = document.getElementById('openBtn'),
    closeBtnOne = document.getElementById('closeBtnOne'),
    closeBtnTwo = document.getElementById('closeBtnTwo'),
    leftSlide = document.querySelector('.left_slide'),
    rightSlide = document.querySelector('.right_slide');

openBtn.addEventListener('click', () =>{
    leftSlide.style.width = '50%';
    rightSlide.style.width = '50%';
})

closeBtnOne.addEventListener('click', closeSlide);
closeBtnTwo.addEventListener('click', closeSlide)

function closeSlide() {
    leftSlide.style.width = '0%';
    rightSlide.style.width = '0%';
};