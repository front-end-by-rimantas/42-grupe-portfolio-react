// IMPORT
import { backToTopScroll } from '../components/backToTopScroll.js';
// EXECUTION

/* header: start */
/* header: end */

/* Hero: start */
/* Hero: end */

/* Express Functionality: start */
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
const scrolling = () => {
    let lastKnownScrollPosition = scrollY || 0;
    let ticking = false;

    if (!ticking) {
        requestAnimationFrame(() => {
            backToTopScroll(lastKnownScrollPosition);
            ticking = false;
        });
        ticking = true;
    }
};
addEventListener('scroll', scrolling);
/* Back to top: end  */
