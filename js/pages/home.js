// IMPORT
import expressFunctionalityData from '../data/expressFunctionalityData.js';
import { renderExpressFunctionality } from '../components/renderExpressFunctionality.js';
// EXECUTION

/* header: start */
/* header: end */

/* Hero: start */
const formDOM = document.querySelector('form.form');
const formInputsDOM = formDOM.querySelectorAll('input');
console.log(formInputsDOM);
function validate(){
    console.log('pavyko!');
    for (const i of formInputsDOM) {
        if (i.value === '') {
            alert ("Must enter " + i.placeholder + " value");
        }
        if (i.name === 'fphone') {
            for (const x of i.value) {
                if (!Number.isInteger(Number(x))) {
                    alert ("ERROR: phone has to be only numbers");
                    break;
                }
            }    
        }
    }
    alert(formInputsDOM.name('fname').value);
    
}
formDOM.addEventListener('submit', validate);
/* Hero: end */

/* Express Functionality: start */
renderExpressFunctionality('express-grid', expressFunctionalityData);
/* Express Functionality: end */

/* Clients section: start */
/* Clients section: end */

/* Device section: start */
/* Device section: end */

/* How sApp works?: start */
/* How sApp works?: end */

/* Simple & Beautiful Interface - section: start */
/* Simple & Beautiful Interface - section: end */

/* Unlock Full Power Of sApp - section: start */
/* Unlock Full Power Of sApp - section: end */

/* FAQ: start */
/* FAQ: end */

/* Our Team Experts section: start */
/* Our Team Experts section: end */

/* sApp is available for all devices - section: start */
/* sApp is available for all devices - section: end */

/* Subscribe to get updates - section: start */
/* Subscribe to get updates - section: end */

/* Stay Tuned section: start */
/* Stay Tuned section: end */

/* footer: start  */
/* footer: end  */

/* Back to top: start  */
/* Back to top: end  */
