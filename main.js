const modal = document.getElementById('modal');
const modalInner = document.querySelector('.content');
const submitBtn = document.querySelector('button');
const closeBtn = document.querySelector('.close');
const checkYes = document.querySelectorAll('.check-yes');
const checkNo = document.querySelectorAll('.check-no');

submitBtn.addEventListener('click', () => {

    let percent = 0;
    let i = 0;
    
    checkYes.forEach((el) => {
        if (el.checked === true) {
            percent += 25;
        };
    });

    modal.style.display = 'block';

    if (percent === 0) {
        modalInner.innerHTML = 'You dont want to work in office';
    } else {        
        const interval = setInterval(() => {
            modalInner.innerHTML = `${i}% You want to work in office.`;
            if (i == percent) clearInterval(interval);
            else i++;
        }, 20);
    };
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});