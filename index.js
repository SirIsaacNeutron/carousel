const carouselButtons = document.querySelectorAll(".carousel-button")

carouselButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const offset = button.classList.contains("next") ? 1 : -1

        // Works no matter how many carousels there are!
        const slides = button.closest(".carousel").querySelector(".carousel-slides")
        
        const previouslyActiveSlide = slides.querySelector(".carousel-slide.active")

        let newIndex = [...slides.children].indexOf(previouslyActiveSlide) + offset

        if (newIndex < 0) {
            newIndex = slides.children.length - 1
        }
        else if (newIndex >= slides.children.length) {
            newIndex = 0
        }

        slides.children[newIndex].classList.add("active")

        previouslyActiveSlide.classList.remove("active")
    })
})
