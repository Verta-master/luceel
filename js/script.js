//Mobile menu
$('.menu__btn').click(function(e) {
  e.stopPropagation();
  $('.menu').toggleClass('menu--opened');
  $('.menu__list').slideToggle();
});

//Mobile sidebar
if (window.innerWidth < 766) {
  $('.sidebar__title').click(function() {
    $('.sidebar__list').slideToggle();
    $(this).toggleClass('sidebar__title--opened');
  });
}
