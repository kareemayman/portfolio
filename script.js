const skillSection = document.getElementById('skills')
const skills = Array.from(document.querySelectorAll('.skills .flex div div'))

const scrollToTopButton = document.querySelector('.scroll-to-top-button')

const burgerIcon = document.querySelector('header i:first-of-type')
const mobileMenu = document.querySelector('.mobile-menu')
const closeMobileMenuIcon = document.querySelector('.mobile-menu .flex i')

// Scroll Event
window.addEventListener('scroll', e => {

    // Get Scroll Position
    const scrollPos = window.scrollY

    // For Scroll To Top Button
    if (scrollPos >= 250) {
        
        scrollToTopButton.style.opacity = 1
    } else {

        scrollToTopButton.style.opacity = 0
    }

    // For Skills Progress Bar
    if (scrollPos >= (skillSection.offsetTop - 300)) {

        skills.forEach(skill => {
            
            const span = skill.querySelector('span')
            span.style.width = skill.dataset.percent
        })
    }
})

// Event For Clicking On Scroll To Top Button
scrollToTopButton.addEventListener('click', e => {

    window.scrollTo({
        behavior: "smooth",
        top: 0  
    })
})

// Event For Clicking On Burger Icon
burgerIcon.addEventListener('click', e => {

    // Show Mobile Menu
    mobileMenu.classList.add('show-mobile-menu')
    // Disable Scrolling
    document.body.classList.add('disable-scroll')
})

// Event For Closing Mobile Menu
mobileMenu.addEventListener('click', e => {

    // If X Button Was Clicked
    if (e.target.matches('i') || e.target.matches('a')) {

        mobileMenu.classList.toggle('show-mobile-menu')
        // Enable Scrolling
        document.body.classList.remove('disable-scroll')
    }
})