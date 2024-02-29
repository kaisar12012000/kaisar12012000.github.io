document.addEventListener("DOMContentLoaded", function () {
    const glow = document.getElementById("glow");

    document.addEventListener("mousemove", function(e) {
        glow.style.left = e.pageX-200 + "px"
        glow.style.top = e.pageY-200 + "px"
    })
    
    document.addEventListener("mouseenter", function() {
        glow.classList.add("glowing")
    })
    document.removeEventListener("mouseleave", function() {
        glow.classList.remove("glowing")
    })

    const sections = document.querySelectorAll(".section")
    const links =  document.querySelectorAll(".hl")
    const lines = document.querySelectorAll(".hl-line")
    const rightChild = document.getElementById("right-child")
    
    function highlightLink () {
        sections.forEach((element, index) => {
            const top = element.offsetTop -300
            const bottom = top + element.clientHeight
            const scrollPosition = rightChild.scrollTop

            if (scrollPosition >= top && scrollPosition < bottom) {
                links.forEach((link, i) => {
                    link.classList.remove("active")
                    lines[i].classList.remove("line-animate")
                })
                links[index].classList.add("active")
                lines[index].classList.add("line-animate")
                console.log(links, lines)
            }
        })
    }
    rightChild.addEventListener("scroll", highlightLink)
})

function scrollOnClick (elementId) {
    const sections = document.querySelectorAll(".section")
    sections[elementId].scrollIntoView()
}

function changeToView(view) {
    const servicesDom = document.getElementById("services")
    const mainDom = document.getElementById("main-body")
    const btn1 = document.getElementById("btn-1")
    
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera


    if (view === "MAIN") {
        servicesDom.classList.add("hidden")
        mainDom.classList.remove("hidden")
        btn1.classList.remove("hidden")
    } else {
        servicesDom.classList.remove("hidden")
        mainDom.classList.add("hidden")
        btn1.classList.add("hidden")
    }
}

const wmiArr = [
    "a Frontend Engineer",
    "a Backend Engineer",
    "a Database Architect",
    "a Devops Engineer",
    "a Web Designer",
    "much more..."
]

const wmiElement = document.getElementById("wmi")

let i = 0;
let j = 0;
let typing = true

function typeIt() {
    if (i < wmiArr.length) {
        // still have elements to cover
        if (j < wmiArr[i].length && typing){
            // typing wmiArr[i]
            wmiElement.innerHTML += wmiArr[i].charAt(j)
            j++;
            setTimeout(typeIt, 100)
        } else {
            // move to next
            if (j > 0) {
                wmiElement.innerHTML = wmiArr[i].slice(0, j+1)
                j--
                typing = false
                setTimeout(typeIt, 100)
            } else {
                j = 0
                i++
                typing = true
                wmiElement.innerHTML = ""
                setTimeout(typeIt, 500)
            }
        }
    } else {
        // restart loop
        if (j > 0) {
            wmiElement.innerHTML = wmiArr[i].slice(0, j+1)
            j--
            setTimeout(typeIt, 100)
        } else {
            i = 0;
            j = 0;
            wmiElement.innerHTML = ""
            setTimeout(typeIt, 500)
        }
    }
}

typeIt()
// loopTypeIt()