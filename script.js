let ham = document.getElementById("hamBtn");
let navLinks = document.getElementById("navLinks");

const svgHamOpen = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16" > <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" /> </svg>`;
const svgHamClose = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16"> <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/> </svg>`;

ham.getAttribute("data-state") == "open"
  ? (ham.innerHTML = svgHamOpen)
  : (ham.innerHTML = svgHamClose);


ham.addEventListener("click", () => {
  let hamState = ham.getAttribute("data-state");

  if (hamState) {
    ham.innerHTML = svgHamClose
    ham.classList.add('ham-transform');
    navLinks.classList.add('nav-links-show');
    ham.setAttribute("data-state", "")
    document.getElementsByTagName("body")[0].style.overflowY = "hidden";
  } else {
    ham.innerHTML = svgHamOpen
    ham.classList.remove('ham-transform');
    navLinks.classList.remove('nav-links-show');
    ham.setAttribute("data-state", "open")
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
  }

})
