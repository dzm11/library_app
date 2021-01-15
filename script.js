let button = document.querySelector('.mobile_button');
let menu = document.querySelector('.menu');
let content = document.querySelector('.content');

button.addEventListener('click', function () {
    menu.classList.toggle("active");
    content.classList.toggle("active");
  });