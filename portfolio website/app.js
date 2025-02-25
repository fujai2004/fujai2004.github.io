// Smooth scroll function
function smoothScroll(target, duration) {
    var target = document.querySelector(target)
    var targetPosition = target.getBoundingClientRect().top
    var startPosition = window.pageYOffset
    var distance = targetPosition - 80 // Subtract header height
    var startTime = null
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime
      var timeElapsed = currentTime - startTime
      var run = ease(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }
  
    function ease(t, b, c, d) {
      t /= d / 2
      if (t < 1) return (c / 2) * t * t + b
      t--
      return (-c / 2) * (t * (t - 2) - 1) + b
    }
  
    requestAnimationFrame(animation)
  }
  
  // Add click event listeners to navigation links
  document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header u1 a")
    navLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
        const target = this.getAttribute("href")
        smoothScroll(target, 1000) // Adjust the duration (in ms) to make scrolling slower or faster
      })
    })
  })
  
  // Function to highlight active section in navigation
  function highlightActiveSection() {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll("header u1 a")
  
    window.addEventListener("scroll", () => {
      let current = ""
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute("id")
        }
      })
  
      navLinks.forEach((link) => {
        link.classList.remove("active")
        if (link.getAttribute("href").substring(1) === current) {
          link.classList.add("active")
        }
      })
    })
  }
  
  // Call the function when the page loads
  document.addEventListener("DOMContentLoaded", highlightActiveSection)
  
  