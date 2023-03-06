import '/main/main.css';

const { btnFunction, btn } = require("./button");

const mainContentTextColor = document.querySelector('.main-content__text-item');
mainContentTextColor.classList.add('active');


function changeColorBack() {
    
    const active = document.querySelector('.active');

    if (active) {
        setTimeout(() => {
            mainContentTextColor.classList.remove('active');
        }, 2000)
    } else {
        mainContentTextColor.classList.add('active');
    }
}

setInterval(changeColorBack, 2000);

btn.addEventListener('click', btnFunction)

