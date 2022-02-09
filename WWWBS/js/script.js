document.addEventListener('DOMContentLoaded', function(){

  document.querySelector('.header_burger').addEventListener('click', function(){
    document.querySelector('.header_burger').classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  })

});