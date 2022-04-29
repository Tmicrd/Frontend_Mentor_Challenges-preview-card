const image = document.querySelector('.main-image');
const view = document.querySelector('.view');
const box = document.querySelector('.box');

image.addEventListener('mousemove', e => {
    view.style.display = 'block';
    box.style.display = 'block';
});
