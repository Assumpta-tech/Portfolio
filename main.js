var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Software Developer", "UI & UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

function setYear() {
  document.getElementById("year").innerHTML = new Date().getFullYear();
}
