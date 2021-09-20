document.addEventListener('DOMContentLoaded', function(){

  document.querySelector('.header_burger').addEventListener('click', function(){
    document.querySelector('.header_burger').classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
  });

  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
      bulletClass: 'bull',
      bulletActiveClass: 'bull-active',
      clickable: true,
    },
    a11y: {
      paginationBulletMessage: 'Кнопка переключения слайда {{index}}'
    },
  });
  
  document.querySelectorAll('.section-heading__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
        document.querySelectorAll('.section-how__slider-container').forEach(function(tabContent){
          tabContent.classList.remove('tab-content-active');
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active');
    });
  });

  $( function() {
    $( "#accordion" ).accordion({
      icons: false,
      heightStyle: "content",
      collapsible: true,
      active: false
    });
  });
  
  
});

