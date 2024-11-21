"use strict"


// Pre Loader

window.onload = () => {
    let preloader = document.querySelector('#preloader-div')
    preloader.classList.add('fade')
    document.querySelector('body').style.overflowY = "scroll"

    setTimeout(() => {
        preloader.style.display = "none"
    }, 1000);
}

// Responsive Navbar 

const primaryNavigation = document.querySelector('.primary-navigation')
const navToggle= document.querySelector('#nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNavigation.getAttribute('data-visible')
    
    if (visibility === 'false') {
        primaryNavigation.setAttribute('data-visible', 'true')
        navToggle.setAttribute('aria-expanded', 'true')
    }
    else {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    }
})

const navLinks = document.querySelectorAll('.nav-link')
navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        primaryNavigation.setAttribute('data-visible', 'false')
        navToggle.setAttribute('aria-expanded', 'false')
    })
})


// Sticky Navbar

//window.onscroll = function() {scrollfn()}

//var currentStick = document.querySelector('#hero').scrollHeight;


// Navbar button reponse

const navLinksAnchor = document.querySelectorAll('.nav-link a')
navLinksAnchor.forEach((navLink) => {
    navLink.addEventListener('click', (e) => {
        navLinksAnchor.forEach((anchor) => {
            anchor.parentNode.classList.remove("active")
        })
        e.currentTarget.parentNode.className += " active"
    })
})

// Navbar updation on scroll

let sections = document.querySelectorAll('section')
console.log(sections)
window.onscroll = () => {
    if (window.scrollY >= currentStick) {
        primaryNavigation.classList.add("sticky")
        primaryNavigation.style.backgroundColor = "#0bceff"
    } else {
        primaryNavigation.classList.remove("sticky")
        primaryNavigation.style.backgroundColor = ""
    }
    
    let current = ""
    
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id")
        }
    })

    navLinksAnchor.forEach((anchor) => {
        let link = anchor.parentNode
        link.classList.remove("active")
        
        if (link.classList.contains(current)) {
            link.classList.add("active");
        }

    })
}


let heroButton = document.querySelector('#hero-button')
let path = "./assets/Paper Submission.pdf"

if (heroButton != null) {
heroButton.addEventListener(('click'), () => {
    location.href = './callforpapers.html'
})

}
// let sections = document.querySelectorAll('section')

// Countdown Timer

const eventDate = new Date("March 18, 2024 10:00:00").getTime()

const countDown = setInterval(() => {
    const currentDate = new Date().getTime()
   
    const timeToEvent = eventDate - currentDate;
    const days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24));   
    const hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60)); 
    const seconds = Math.floor((timeToEvent % (1000 * 60)) / 1000);

    var daysContainer = document.querySelector('#days-value')
    if (daysContainer != null) {
        document.querySelector('#days-value').innerHTML = days
        document.querySelector('#hours-value').innerHTML = hours
        document.querySelector('#mins-value').innerHTML = minutes
        document.querySelector('#secs-value').innerHTML = seconds
    }

}, 1000);


// document.querySelector('#hero-button').addEventListener('click', () => {
//     console.log('hello')
// })


// About section

let aboutContent = `<strong>International Conference on Metaverse Technologies and Cloud Computing (ICMTCC'24)</strong> broadly addressing the internet of Things (IOT), Networking technologies, Innovative Communication & Computing, and its supported technologies. This conference will provide International phattoon to researchers, academicians, and practitioners from industries to meet and share their expertise and tig-end development in technologies in the field of Information & Technology. Authors are encouraged to contribute to the conference by submitting research articles which illustrate results of their valuable research, survey works, and industrial experiences with significant outcome in their specialized
`

let aboutSection = document.querySelector('#about-content')

if (aboutSection != null) {
    aboutSection.innerHTML = aboutContent
}



// Schedule section

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })




// Tracks Section


let tracksContainer = document.querySelector('#tracks-container')

let tracks = [
    {
        "category": "ARTIFICAL INTELLIGENCE",
        "trackName" : "ARTIFICAL INTELLIGENCE",
        "imgUrl" : './assets/images/ai.jpg',
        "info":"� Industry 4.0<br>� Artificial Intelligence for IoT Systems<br>� Deep Learning<br>� Data Science<br>� Blockchain Technology<br>� Cyber Security<br>� Smart Healthcare Devices<br>� Cyber- Physical System with Artificial Intelligence<br>� Human-Centred Artificial Intelligence<br>� Quantum Machine Learning<br>� Big Data Analytics & Business Analytics & Video Analytics<br>� Explainable Artificial Intelligence & Intelligent Systems."
    },
    {
        "category": "INTELLIGENT SYSTEMS",
        "trackName" : " METAVERSE TECHNOLOGIES AND CLOUD COMPUTING ",
        "imgUrl" :'./assets/images/IS.jpg',
        "info":"�Robust Machine Learning Approache<br>� Computer Vision<br>� Automation and Robotics<br>� Complex Industrial Intelligent Systems<br>� Natural language processing<br>� Cognitive architectures<br>� Intelligent control applications<br>� Intelligent Vehicle Control<br>� Hybrid Fuzzy Systems<br>� Intelligent Agents and Multi - Agent Systems<br>� Deep Learning on Prediction & Visualization<br>� Trusted and Dependable Intelligent Systems"
    },
    {
        "category": "CONTROL TECHINIQES",
        "trackName" : "CONTROL TECHINIQES",
        "imgUrl" : './assets/images/tract3.jpg',
        "info":"� Robotics, Navigation and Control<br>� Network Intelligence & Network Control<br>� Learning & Adaptive Control<br>� Complex System Modeling, optimization & control<br>� Intelligent Automation & Decision Support Systems<br>� Fuzzy & Neural Networks Based Control Systems<br>� Learning and Adaptive Control Systems<br>� Hybrid Intelligent Systems and Control<br>� Embedded Control Systems<br>� Machine Learning in Control Applications<br>� Software Agents for Intelligent Control Systems"
    },
    {
        "category": "COMPUTING TECHNIQUES",
        "trackName" : "COMPUTING TECHNIQUES",
        "imgUrl" : './assets/images/track4.jpg',
        "info":"� Distributed Computing<br>� Evolutionary Computing<br>� Quantum Computing<br>� Cloud Computing<br>� Grid Computing<br>� Mobile Computing<br>� Nano Computing<br>� Soft Computing<br>� Ubiquitous Computing<br>� Bioinformatics & Computational Biology<br>� Computer Simulation<br>� Image and Signal Processing"
    },
   
]

// Track Renderer

let count = 1

tracks.forEach((track) => {
    if (tracksContainer == null) {
        return
    }
    let trackContainer = document.createElement("div")
    trackContainer.classList.add("track-container")
    trackContainer.classList.add("hidden")
    trackContainer.setAttribute('data-visible', 'false')
    if (count == 1) {
        trackContainer.setAttribute('data-visible', 'true')
    }
    let trackHeadingContainer = document.createElement("div")
    trackHeadingContainer.classList.add("track-heading-container")
    let trackNumberContainer = document.createElement("div")
    trackNumberContainer.classList.add("track-number-container")
    trackNumberContainer.innerHTML = count
    let trackHeading = document.createElement("p")
    trackHeading.classList.add("track-heading")
    trackHeading.innerHTML=track['trackName']

    trackHeadingContainer.appendChild(trackNumberContainer)
    trackHeadingContainer.appendChild(trackHeading)


    let trackInfo = document.createElement("div")
    trackInfo.classList.add("track-info")
    trackInfo.style.backgroundImage = `url( ${track['imgUrl']})`
    // console.log(trackInfo.style)
    let trackInfoOverlay = document.createElement("div")
    trackInfoOverlay.classList.add("track-info-overlay")
    let trackInfoText = document.createElement("p")
    trackInfoText.innerHTML = track['info']
    trackInfoOverlay.appendChild(trackInfoText)
    trackInfo.appendChild(trackInfoOverlay)

    trackContainer.appendChild(trackHeadingContainer)
    trackContainer.appendChild(trackInfo)
    tracksContainer.appendChild(trackContainer)
    
    count++
})

// Track Handler

const trackHeadingContainer = document.querySelectorAll('.track-heading-container')

trackHeadingContainer.forEach((track) => {
    track.addEventListener('click', (e) => {

        // console.log(e.target)
        let trackContainer = e.target.parentNode;
        if (e.target.className == 'track-heading') {
            trackContainer = e.target.parentNode.parentNode
        }

        const currTrack = document.querySelector('[data-visible="true"]')
        currTrack.setAttribute('data-visible', 'false')
        // console.log(trackContainer)
        trackContainer.setAttribute('data-visible', 'true')
        // console.log(e.target.getBoundingClientRect())
        

    })
})


// Intersection Observer

const hiddenElements = document.querySelectorAll('.hidden')
// console.log(hiddenElements)

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove('hidden')
        }
    })
}, {
    threshold: .7
})

hiddenElements.forEach(ele => {
    observer.observe(ele)
})


