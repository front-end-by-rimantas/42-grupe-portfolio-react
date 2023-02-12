// IMPORT
import { backToTopScroll } from '../components/backToTopScroll.js';
import { scrl } from '../components/scrl.js';
import expressFunctionalityData from '../data/expressFunctionalityData.js';
import { renderExpressFunctionality } from '../components/renderExpressFunctionality.js';
import howAppWorksData from '../data/howAppWorksData.js';
import { renderHowAppWorks } from '../components/renderHowAppWorks.js';
import howAppTitleData from '../data/howAppTitleData.js';
import { renderHowAppTitle } from '../components/renderHowAppTitle.js';
import { validateForm } from '../components/validateForm.js';
import { stickyHeaderScroll } from '../components/stickyHeaderScroll.js';

// EXECUTION

/* header: start */
const hamburgerDOM = document.querySelector('button.fa-bars');
const exitDOM = document.querySelector('button.fa-times');
const allContainersDOM = document.querySelectorAll('.container');
const allFluidContainersDOM = document.querySelectorAll(`.container-fluid`);
const bcttDOM = document.querySelector('.bctt');
const burgSec = document.getElementById('burger-section');

function kaDaryti() {
    for (const x of allContainersDOM) {
        x.classList.add('hidden');
    }
    for (const x of allFluidContainersDOM) {
        x.classList.add('hidden');
    }
    bcttDOM.classList.add('hidden');
    burgSec.classList.remove('hidden');
}

function kaDaryti2() {
    for (const x of allContainersDOM) {
        x.classList.remove('hidden');
    }
    for (const x of allFluidContainersDOM) {
        x.classList.remove('hidden');
    }
    bcttDOM.classList.remove('hidden');
    burgSec.classList.add('hidden');
}
hamburgerDOM.addEventListener('click', kaDaryti);
exitDOM.addEventListener('click', kaDaryti2);

scrl(stickyHeaderScroll);
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
renderHowAppTitle('title', howAppTitleData);
renderHowAppWorks('info', howAppWorksData);
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
const footerSocialsData = [
    icon, 'fa fa-google-plus','fa fa-google-plus',
    href, "#",
];
const socialIcons = document.getElementById('social_icons');

let HTML = '';
for (const icon of footerSocialsData) {
HTML += `<a class="icon-box facebook" href="#">
<div class="fa fa-facebook"></div>
<div class="fa fa-facebook"></div>
</a>`;

}
socialIcons.innerHTML = HTML;
  
/* footer: end  */

/* Back to top: start  */
scrl(backToTopScroll);
/* Back to top: end  */
