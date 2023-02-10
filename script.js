const footer = document.querySelector('.footer');

function scrollHeader() {
  const header = document.getElementById('header');
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}

window.addEventListener('scroll', scrollHeader);


window.addEventListener("scroll", () => {
  if (this.scrollY + 190 >= window.innerHeight ) {
    footer.classList.add('scroll-end');
    console.log(this.scrollY);
  } else {
    footer.classList.remove('scroll-end');
  }
});

console.log(window.innerHeight);
console.log(this.scrollY);
