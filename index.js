const  navToggler = () =>{
    const closeButton  = document.getElementById("closeButton");
    const bar = document.getElementById("bar");
    const mobileNav = document.getElementById('mobNav');


    closeButton.style.display = 'block'
    bar.style.display = 'none'
    mobileNav.style.display = 'flex'
    
}

const closeBtnClick = () => {
     const closeButton  = document.getElementById("closeButton");
     const bar = document.getElementById("bar");
     const mobileNav = document.getElementById('mobNav');

     closeButton.style.display = 'none'
     bar.style.display = 'block'
     mobileNav.style.display = 'none'
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".nextBtn",
        prevEl: ".prevBtn",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// Keep track of the currently open answer
let openAnswer = null;

// Get all the question elements
const questions = document.querySelectorAll('.question');

// Add click event listener to each question
questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.parentElement.querySelector('.answer');
        const icon = question.querySelector('.icon');
        const faqItem = question.parentElement;

        // Close the currently open answer if it's not the one being clicked
        if (openAnswer && openAnswer !== answer) {
            openAnswer.classList.remove('show');
            openAnswer.parentElement.classList.remove('open');
            openAnswer.previousElementSibling.querySelector('.icon').textContent = '+';
        }

        // Toggle the current answer
        answer.classList.toggle('show');
        faqItem.classList.toggle('open');

        // Update the icon
        icon.textContent = answer.classList.contains('show') ? '-' : '+';

        // Update the openAnswer variable
        openAnswer = answer.classList.contains('show') ? answer : null;
    });
});