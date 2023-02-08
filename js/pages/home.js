// IMPORT
import expressFunctionalityData from '../data/expressFunctionalityData.js';
import { renderExpressFunctionality } from '../components/renderExpressFunctionality.js';
import { validateForm } from '../components/validateForm.js';
// EXECUTION

/* header: start */
/* header: end */

/* Hero: start */
const heroFormDOM = document.querySelectorAll('form.form')[0];
heroFormDOM.addEventListener('submit', () => validateForm(heroFormDOM));
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
const subFormDOM = document.querySelectorAll('form.form')[1];
subFormDOM.addEventListener('submit', () => validateForm(subFormDOM));
/* Subscribe to get updates - section: end */

/* Stay Tuned section: start */
const stayFormDOM = document.querySelectorAll('form.form')[2];
stayFormDOM.addEventListener('submit', () => validateForm(stayFormDOM));
/* Stay Tuned section: end */

/* footer: start  */
/* footer: end  */

/* Back to top: start  */
/* Back to top: end  */
