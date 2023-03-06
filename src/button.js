
const img = document.querySelector('.main-content__image-item');
export const btn = document.querySelector('.main-content__button');

export function btnFunction(){
    img.classList.toggle('main-content__image-item--active');
    const imageItemActive = document.querySelector('.main-content__image-item--active');
}



