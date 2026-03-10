import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const fulf = document.querySelector('.js-fuifilled');
const delay = document.querySelector('.js-delay');

form.addEventListener('submit', e => {
    e.preventDefault();
  
    const delayValue = Number(delay.value);
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fulf.checked) {
                resolve(delayValue)
            } else {
                reject(delayValue)
            }
        }, delayValue)
    });
    
    promise.then(data => {
        iziToast.show({
            message: `✅ Fulfilled promise in ${data}ms`,
            position: "topRight",
        });
    })
        .catch(data => {
            iziToast.error({
                message: `❌ Rejected promise in ${data}ms`,
                position: "topRight",
            });
        })
});



