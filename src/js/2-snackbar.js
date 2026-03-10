import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const delayInput = document.querySelector('.js-delay');

form.addEventListener('submit', e => {
    e.preventDefault();
  
    const delayValue = Number(delayInput.value);
    const state = form.querySelector('input[name="state"]:checked').value;
    
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delayValue)
            } else if(state === 'rejected'){
                reject(delayValue);
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



