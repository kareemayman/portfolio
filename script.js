const skillSection = document.getElementById('skills')
const skills = Array.from(document.querySelectorAll('.skills .flex div div'))

const scrollToTopButton = document.querySelector('.scroll-to-top-button')

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