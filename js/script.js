let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}


///////// NAVBAR
let lastScrollTop = 0;
scroller = document.getElementById('scroll');

window.addEventListener('scroll', function() {
  const scrollTop = window.pageTOffset ||
  this.document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    scroller.style.top="-180px";
  } else {
      scroller.style.top="0";
  }
  lastScrollTop = scrollTop;
});
