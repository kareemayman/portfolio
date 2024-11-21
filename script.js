const skillSection = document.getElementById('skills')
const skills = Array.from(document.querySelectorAll('.skills .flex div div'))

window.addEventListener('scroll', e => {

    const scrollPos = window.scrollY

    if (scrollPos >= (skillSection.offsetTop - 50)) {

        skills.forEach(skill => {
            
            const span = skill.querySelector('span')
            span.style.width = skill.dataset.percent
        })
    }
})