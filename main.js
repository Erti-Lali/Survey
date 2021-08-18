const modal = document.getElementById('modal');
const modalInner = document.querySelector('.content');
const submitBtn = document.querySelector('button');
const closeBtn = document.querySelector('.close');
const checkYes = document.querySelectorAll('.check-yes');
const checkNo = document.querySelectorAll('.check-no');

submitBtn.addEventListener('click', () => {    

    let score = 0;

    checkYes.forEach((el) => {
        if (el.checked === true) {
            score += 25;
        };
    });

    modal.style.display = 'block';

    if(score === 0) {
        modalInner.innerHTML = 'You dont want to work in office'
    } else {
        modalInner.innerHTML = `${score}% You want to work in office.`;
    }
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});