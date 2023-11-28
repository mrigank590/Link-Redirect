window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var upperDivOpacity = 1 - (scrollTop / 600);
  var lowerDivOpacity = scrollTop / 600;

  document.getElementById('upper-div').style.opacity = upperDivOpacity;
  document.getElementById('lower-div').style.opacity = lowerDivOpacity;
});


const cursor = document.querySelector(".cursor");
const links = document.querySelectorAll("nav ul li a");
const navlinks = document.querySelectorAll("nav ul li");

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY + 4;

    cursor.style.left = leftPosition + "px";
    cursor.style.top = topPosition + "px";
})

links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        cursor.classList.add("large");
    })
})

links.forEach(link => {
    link.addEventListener("mouseleave", () => {
        cursor.classList.remove("large");
    })
})

// Animation

navlinks.forEach((li, i) => {
    li.style.animationDelay = 0 + i * 140 + "ms";
})

const cursorDiv = document.querySelector('.cursor');

// Select the elements
const logo = document.querySelector('.logo');
const projectLink = document.querySelector('.p');
const aboutLink = document.querySelector('.a');
const fileIcon = document.querySelector('.icons .fa-file');
const githubIcon = document.querySelector('.icons .fa-github');
const search = document.querySelector('.searchBox');


// Add event listeners for hover
logo.addEventListener('mouseover', handleHover);
projectLink.addEventListener('mouseover', handleHover);
aboutLink.addEventListener('mouseover', handleHover);
fileIcon.addEventListener('mouseover', handleHover);
githubIcon.addEventListener('mouseover', handleHover);
search.addEventListener('mouseover', handleHover);


// Add mouseout event listeners if needed
logo.addEventListener('mouseout', handleMouseOut);
projectLink.addEventListener('mouseout', handleMouseOut);
aboutLink.addEventListener('mouseout', handleMouseOut);
fileIcon.addEventListener('mouseout', handleMouseOut);
githubIcon.addEventListener('mouseout', handleMouseOut);
search.addEventListener('mouseover', handleMouseOut);







// Define the hover handler function
function handleHover() {
    // Add the 'large' class to the cursor element
    cursorDiv.classList.add('large');
}

// Define the mouseout handler function if needed
function handleMouseOut() {
  // Remove the 'large' class from the cursor element
  cursorDiv.classList.remove('large');
}


// fg

const cursorDiv2 = document.querySelector('.cursor2');


function handleHover2() {
    // Add the 'large' class to the cursor element
    cursorDiv2.classList.add('large');
}

// Define the mouseout handler function if needed
function handleMouseOut2() {
    // Remove the 'large' class from the cursor element
    cursorDiv2.classList.remove('large');
}


logo.addEventListener('mouseover', handleHover2);
projectLink.addEventListener('mouseover', handleHover2);
aboutLink.addEventListener('mouseover', handleHover2);
fileIcon.addEventListener('mouseover', handleHover2);
githubIcon.addEventListener('mouseover', handleHover2);

// Add mouseout event listeners if needed
logo.addEventListener('mouseout', handleMouseOut2);
projectLink.addEventListener('mouseout', handleMouseOut2);
aboutLink.addEventListener('mouseout', handleMouseOut2);
fileIcon.addEventListener('mouseout', handleMouseOut2);
githubIcon.addEventListener('mouseout', handleMouseOut2);

document.addEventListener("mousemove", (e) => {
    let leftPosition = e.pageX + 4;
    let topPosition = e.pageY - 783;

    cursorDiv2.style.left = leftPosition + "px";
    cursorDiv2.style.top = topPosition + "px";
})
