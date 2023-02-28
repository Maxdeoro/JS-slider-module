//SLIDER

document.addEventListener('DOMContentLoaded', () => {

const prev = document.querySelector('.offer__slider-prev');
const next = document.querySelector('.offer__slider-next');
const slides = document.querySelectorAll('.offer__slide');
const total = document.querySelector('#total');
const current = document.querySelector('#current');
const slidesWrapper = document.querySelector('.offer__slider-wrapper');
const slidesField = document.querySelector('.offer__slider-inner');
const width = window.getComputedStyle(slidesWrapper).width;           //получаем ширину окна для одного слайда
let slideIndex = 1;
let offset = 0;

if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
} else {
    total.textContent = `slides.length`;
    current.textContent = slideIndex;
}

slidesField.style.width = 100 * slides.length + '%';        //определяем ширину поля для всех слайдов
slidesField.style.display = 'flex';                         //установка слайдов в горизонтальную полосу
slidesField.style.transition = '0.5s all';

slidesWrapper.style.overflow = 'hidden';                    //скрыть все слайды кроме slidesWrapper
slides.forEach((slide) => {                                 //установка одинаковой ширины для всех слайдов
    slide.style.width = slidesWrapper;
});

next.addEventListener('click', () => {
    if(offset == +width.slice(0, width.length-2) * (slides.length - 1)) {        //если слайдер в конце, показывать первый слайд
        offset = 0;
    } else {
        offset += +width.slice(0, width.length-2);       //преобразуем строку из css в число пикселей
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    
    if (slideIndex == slides.length) {
        slideIndex = 1;
    } else {
        slideIndex++;
    }

    if(slides.length < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
});
prev.addEventListener('click', () => {
    if(offset == 0) {
        offset = +width.slice(0, width.length-2) * (slides.length - 1);
    } else {
        offset -= +width.slice(0, width.length-2); 
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    
    if(slideIndex == 1) {
        slideIndex = slides.length;
    } else {
        slideIndex--;
    }

    if(slideIndex < 10) {
        current.textContent = `0${slideIndex}`;
    } else {
        current.textContent = slideIndex;
    }
});

// showSlides(slideIndex);
// if (slides.length < 10) {
// total.textContent = `0${slides.length}`;
// } else {
//     total.textContent = slides.length;
// }

// function showSlides(n) {
//     if(n > slides.length) {
//         slideIndex = 1;
//     }
//     if(n < 1) {
//         slideIndex = slides.length;
//     }
//     slides.forEach((item) => {
//         item.style.display = 'none';
//     });
//     slides[slideIndex - 1].style.display = 'block';

//     if(slides.length < 10) {
//         current.textContent = `0${slideIndex}`;
//     } else {
//         current.textContent = slideIndex;
//     }
// }
// function plusSlides(n) {
//     showSlides(slideIndex += n);
//     }
//     prev.addEventListener('click', () => {
//         plusSlides(-1);
//     });
//     next.addEventListener('click', () => {
//         plusSlides(1);
//     });

 });